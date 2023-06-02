from django.http import HttpResponse
from django.db import transaction
from celery import Celery, shared_task
from celery.schedules import crontab

from item.models import Item
from order.models import SellOrder, BuyOrder, Transaction

app = Celery('tasks', backend='redis://127.0.0.1:6379',
             broker='redis://127.0.0.1:6379')
app.conf.broker_url = 'redis: //127.0.0.1:6379/0'


# mua gia market: khop voi sell thap nhat
# sell market: khop voi buy cao nhat


@transaction.atomic
def match_sell_order(order):
    if order.type == 'M':
        buy_orders = BuyOrder.objects.all().filter(item=order.item, type='L', is_completed=False).order_by('-price')
        if len(buy_orders) < 1:
            return
        sell_needs = order.quantity - order.filled
        index = 0
        while index < buy_orders.count():
            buy_needs = buy_orders[index].quantity - buy_orders[index].filled
            if sell_needs == buy_needs:
                b = buy_orders[index]
                create_transaction(order, 'S', buy_orders[index].price)
                create_transaction(b, 'B', buy_orders[index].price)
            elif sell_needs < buy_needs:
                create_transaction(order, 'S', buy_orders[index].price)
                update_filled_quantity(buy_orders[index], buy_orders[index].filled + sell_needs, type='B')
                break
            else:
                b = buy_orders[index]
                create_transaction(b, 'B', buy_orders[index].price)
                update_filled_quantity(order, order.filled + buy_needs, type='S')
                sell_needs -= buy_needs
            index += 1
    if order.type == 'L':
        sell_order = SellOrder.objects.all().filter(item=order.item, is_completed=False, type='L')
        if sell_order.count() == 1:
            market_buy_orders = BuyOrder.objects.all().filter(item=order.item, is_completed=False, type='M')
            index = 0
            while index < market_buy_orders.count() > 0 and order.is_complete==False:
                sell_needs = order.quantity - order.filled
                buy_needs = market_buy_orders[index].quantity - market_buy_orders[index].filled
                if sell_needs == buy_needs:
                    b = market_buy_orders[index]
                    create_transaction(order, 'S', market_buy_orders[index].price)
                    create_transaction(b, 'B', market_buy_orders[index].price)
                elif sell_needs < buy_needs:
                    create_transaction(order, 'S', market_buy_orders[index].price)
                    update_filled_quantity(market_buy_orders[index], market_buy_orders[index].filled + sell_needs, type='B')
                    break
                else:
                    b = market_buy_orders[index]
                    create_transaction(b, 'B', market_buy_orders[index].price)
                    update_filled_quantity(order, order.filled + buy_needs, type='S')
                    sell_needs -= buy_needs
                index += 1
        limit_buy_orders = BuyOrder.objects.all().filter(item=order.item, is_completed=False, type='L', price=order.price)
        index = 0
        while index < limit_buy_orders.count() > 0 and order.is_complete==False:
            sell_needs = order.quantity - order.filled
            buy_needs = limit_buy_orders[index].quantity - limit_buy_orders[index].filled
            if sell_needs == buy_needs:
                b = limit_buy_orders[index]
                create_transaction(order, 'S', limit_buy_orders[index].price)
                create_transaction(b, 'B', limit_buy_orders[index].price)
            elif sell_needs < buy_needs:
                create_transaction(order, 'S', limit_buy_orders[index].price)
                update_filled_quantity(limit_buy_orders[index], limit_buy_orders[index].filled + sell_needs, type='B')
                break
            else:
                b = limit_buy_orders[index]
                create_transaction(b, 'B', limit_buy_orders[index].price)
                update_filled_quantity(order, order.filled + buy_needs, type='S')
                sell_needs -= buy_needs
            index += 1


def match_buy_order(order):
    pass


@transaction.atomic
def update_filled_quantity(order, new_quantity, type):
    if type == 'S':
        s_order = SellOrder.objects.get(uuid=order.uuid)
        if s_order.is_completed:
            return False
        s_order.filled = new_quantity
        s_order.save()
        return True
    if type == 'B':
        b_order = BuyOrder.objects.get(uuid=order.uuid)
        if b_order.is_completed:
            return False
        b_order.filled = new_quantity
        b_order.save()
        return True


@transaction.atomic
def create_transaction(order, type, price):
    order.is_completed = True
    order.save()
    Transaction.objects.create(item=order.item, price=price, type=type, owner=order.owner, quantity=order.quantity)


list1 = [3, 4]
list2 = [2, 2]

chosen1 = [False, False]
chosen2 = [False, False]


# print(chosen1)

def check_sum():
    global list1, list2, chosen1, chosen2
    sum1 = sum2 = 0
    for i in range(len(list1)):
        if chosen1[i]:
            sum1 += list1[i]
    for i in range(len(list2)):
        if chosen2[i]:
            sum2 += list2[i]
    if sum1 != 0 and sum1 == sum2:
        return True
    return False

#
# def matchSamePrice():
#     list1.sort()
#     list2.sort()
#     matching(list1, list2, 0, 0, False)


# def matching(list1, list2, index1, index2, sum1, sum2, check):
#     #   global list1, list2, chosen1, chosen2
#
#     if check:
#         return
#
#     if (index1 == len(list1) or index2 == len(list2)):
#         if sum1 != 0 and sum1 == sum2:
#             print(chosen1, end=' ')
#             print(chosen2)
#             print(list1, end=' ')
#             print(list2)
#             check = True
#         return
#
#     matching(index1+1, index2, sum1, sum2, check)
#     chosen1[index1] = True
#     matching(index1+1, index2, sum1 + list1[index1], sum2, check)
#     chosen1[index1] = False
#
#     matching(index1, index2+1, sum1, sum2, check)
#     chosen2[index2] = True
#     matching(index1, index2+1, sum1, sum2 + list2[index2], check)
