from django.db.models import F
from django.http import HttpResponse
from django.db import transaction
from django.core.cache import cache
from celery import Celery, shared_task
from celery.schedules import crontab
from decimal import Decimal
import math
from datetime import datetime

from account.models import Account
from item.models import Item, OwnedItem, PriceRecord
from order.models import SellOrder, BuyOrder, Transaction
from order.constants import CachePreferences

app = Celery('tasks', backend='redis://127.0.0.1:6379',
             broker='redis://127.0.0.1:6379')
app.conf.broker_url = 'redis: //127.0.0.1:6379/0'

# mua gia market: khop voi sell thap nhat
# sell market: khop voi buy cao nhat

@transaction.atomic
def match_sell_order(order):
    sell_needs = order.quantity - order.filled
    if order.type == 'M':
        buy_orders = BuyOrder.objects.all().filter(item=order.item, type='L', is_completed=False).order_by('-price')
        length = buy_orders.count()
        if length < 1:
            return
        for buy_order in buy_orders:
            buy_needs = buy_order.quantity - buy_order.filled
            if sell_needs == buy_needs:
                create_transaction(order, 'S', buy_order.price)
                create_transaction(buy_order, 'B', buy_order.price)
                return
            elif sell_needs < buy_needs:
                create_transaction(order, 'S', buy_order.price)
                update_filled_quantity(buy_order, buy_order.price, sell_needs, type='B')
                return
            else:
                create_transaction(buy_order, 'B', buy_order.price)
                update_filled_quantity(order, buy_order.price, buy_needs, type='S')
                sell_needs -= buy_needs
    if order.type == 'L':
        sell_order = SellOrder.objects.all().filter(item=order.item, is_completed=False, type='L')
        # if this is the first limit order need match with market order before
        if sell_order.count() == 1:
            market_buy_orders = BuyOrder.objects.all().filter(item=order.item, is_completed=False, type='M')
            for market_buy_order in market_buy_orders:
                buy_needs = market_buy_order.quantity - market_buy_order.filled
                if sell_needs == buy_needs:
                    create_transaction(order, 'S', order.price)
                    create_transaction(market_buy_order, 'B', order.price)
                    return
                elif sell_needs < buy_needs:
                    create_transaction(order, 'S', order.price)
                    update_filled_quantity(market_buy_order, order.price, sell_needs, type='B')
                    return
                else:
                    create_transaction(market_buy_order, 'B', order.price)
                    update_filled_quantity(order, order.price, buy_needs, type='S')
                    sell_needs -= buy_needs
        # match the limit orders have same price
        limit_buy_orders = BuyOrder.objects.all().filter(item=order.item, is_completed=False, type='L',
                                                         price=order.price)
        for limit_buy_order in limit_buy_orders:
            buy_needs = limit_buy_order.quantity - limit_buy_order.filled
            if sell_needs == buy_needs:
                create_transaction(order, 'S', limit_buy_order.price)
                create_transaction(limit_buy_order, 'B', limit_buy_order.price)
                return
            elif sell_needs < buy_needs:
                create_transaction(order, 'S', limit_buy_order.price)
                update_filled_quantity(limit_buy_order, limit_buy_order.price, sell_needs, type='B')
                return
            else:
                create_transaction(limit_buy_order, 'B', limit_buy_order.price)
                update_filled_quantity(order, limit_buy_order.price, buy_needs, type='S')
                sell_needs -= buy_needs


def match_buy_order(order):
    buy_needs = order.quantity - order.filled
    if order.type == 'M':
        sell_orders = SellOrder.objects.all().filter(item=order.item, type='L', is_completed=False).order_by('price')
        length = sell_orders.count()
        if length < 1:
            return
        for sell_order in sell_orders:
            sell_needs = sell_order.quantity - sell_order.filled
            if buy_needs == sell_needs:
                create_transaction(order, 'B', sell_order.price)
                create_transaction(sell_order, 'S', sell_order.price)
                return
            elif buy_needs < sell_needs:
                create_transaction(order, 'B', sell_order.price)
                update_filled_quantity(sell_order, sell_order.price, buy_needs, type='S')
                return
            else:
                create_transaction(sell_order, 'S', sell_order.price)
                update_filled_quantity(order, sell_order.price, sell_needs, type='B')
                buy_needs -= sell_needs
    if order.type == 'L':
        buy_order = BuyOrder.objects.all().filter(item=order.item, is_completed=False, type='L')
        # if this is the first limit order need match with market order before
        if buy_order.count() == 1:
            market_sell_orders = SellOrder.objects.all().filter(item=order.item, is_completed=False, type='M')
            for market_sell_order in market_sell_orders:
                sell_needs = market_sell_order.quantity - market_sell_order.filled
                if buy_needs == sell_needs:
                    create_transaction(order, 'B', order.price)
                    create_transaction(market_sell_order, 'S', order.price)
                    return
                elif buy_needs < sell_needs:
                    create_transaction(order, 'B', order.price)
                    update_filled_quantity(market_sell_order, order.price, buy_needs, type='S')
                    return
                else:
                    create_transaction(market_sell_order, 'S', order.price)
                    update_filled_quantity(order, order.price, sell_needs, type='B')
                    buy_needs -= sell_needs
        # match the limit orders have same price
        limit_sell_orders = SellOrder.objects.all().filter(item=order.item, is_completed=False, type='L',
                                                           price=order.price)
        for limit_sell_order in limit_sell_orders:
            sell_needs = limit_sell_order.quantity - limit_sell_order.filled
            if buy_needs == sell_needs:
                create_transaction(order, 'B', limit_sell_order.price)
                create_transaction(limit_sell_order, 'S', limit_sell_order.price)
                return
            elif buy_needs < sell_needs:
                create_transaction(order, 'B', limit_sell_order.price)
                update_filled_quantity(limit_sell_order, limit_sell_order.price, buy_needs, type='S')
                return
            else:
                create_transaction(limit_sell_order, 'S', limit_sell_order.price)
                update_filled_quantity(order, limit_sell_order.price, sell_needs, type='B')
                buy_needs -= sell_needs


@transaction.atomic
def update_filled_quantity(order, price, new_quantity, type):
    if type == 'S':
        s = SellOrder.objects.filter(uuid=order.uuid)
        s.update(filled=F('filled') + new_quantity, total=F('total') + new_quantity * price)
        s.update(price=F('total') / F('filled'), updated_at=datetime.now())
        Account.objects.filter(uuid=order.owner.uuid).update(balance=F('balance') + price * new_quantity)
        OwnedItem.objects.filter(item=order.item, owner=order.owner).update(quantity=F('quantity') - new_quantity)
    if type == 'B':
        b = BuyOrder.objects.filter(uuid=order.uuid)
        b.update(filled=F('filled') + new_quantity, total=F('total') + new_quantity * price)
        b.update(price=F('total') / F('filled'), updated_at=datetime.now())
        Account.objects.filter(uuid=order.owner.uuid).update(balance=F('balance') - price * new_quantity)
        OwnedItem.objects.filter(item=order.item, owner=order.owner).update(quantity=F('quantity') + new_quantity)


@transaction.atomic
def create_transaction(order, type, price):
    if type == 'S':
        o = SellOrder.objects.get(uuid=order.uuid)
        new_quantity = (o.quantity - o.filled)
        o.total = o.total + new_quantity * price
        o.filled = o.quantity
        o.price = o.total / o.quantity
        o.is_completed = True
        o.save()
        Account.objects.filter(uuid=order.owner.uuid).update(balance=F('balance') + new_quantity * price)
        OwnedItem.objects.filter(item=order.item, owner=order.owner).update(quantity=F('quantity') - new_quantity)
    if type == 'B':
        o = BuyOrder.objects.get(uuid=order.uuid)
        new_quantity = (o.quantity - o.filled)
        o.total = o.total + new_quantity * price
        o.filled = o.quantity
        o.price = o.total / o.quantity
        o.is_completed=True
        o.save()
        Account.objects.filter(uuid=order.owner.uuid).update(balance=F('balance') - new_quantity * price)
        owned = OwnedItem.objects.get_or_create(item=order.item, owner=order.owner)[0]
        owned.quantity += new_quantity
        owned.save()

    Transaction.objects.create(item=o.item, price=o.price, type=type,
                               owner=o.owner, quantity=o.quantity, total=o.total)
    item = Item.objects.filter(uuid=o.item.uuid)
    # cache the 24h change of item
    item_24h_last_price = Decimal(cache.get(o.item.name+'_24h_last_price'))
    print(o.item.name+'_24h_last_price')
    print(cache.get(o.item.name+'_24h_last_price'))
    change = math.ceil((price - item_24h_last_price)/item_24h_last_price*100)/100
    item.update(change24=change, current_price=price)
    PriceRecord.objects.create(item=item.first(), price=price)
