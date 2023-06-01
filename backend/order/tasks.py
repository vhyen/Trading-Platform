from django.http import HttpResponse
from celery import Celery, shared_task
from celery.schedules import crontab

from order.models import SellOrder, BuyOrder, Transaction

app = Celery('tasks', backend='redis://127.0.0.1:6379',
             broker='redis://127.0.0.1:6379')
app.conf.broker_url = 'redis: //127.0.0.1:6379/0'

# mua gia market: khop voi sell thap nhat
# sell market: khop voi buy cao nhat


def match_sell_order(order):
    if order.type == 'M':
        buy_orders = BuyOrder.objects.all().filter(item=order.item, type='L',
                                                   is_completed=False).order_by('-price', '-quantity')
        if len(buy_orders) < 1 or order.quantity < buy_orders[0].quantity:
            return
        index = 0
        sell_quantity = order.quantity
        while index < len(buy_orders) and sell_quantity >= 0 and sell_quantity >= buy_orders[index].quantity:
            create_transaction(
                buy_orders[index], 'B', buy_orders[index].price, buy_orders[index].quantity)
            create_transaction(
                order, 'S', buy_orders[index].price, buy_orders[index].quantity)
            sell_quantity -= buy_orders[index].quantity
            index += 1

    # if order.type == 'L':
        # sell_orders = SellOrder.objects.all().filter(item=order.item, type='L', is_completed=False).order_by('-price', '-quantity')
        # if order.price > sell_orders[0].price:
        #     pass

    # while buy_index < len(buy_orders) and sell_index < len(sell_orders):
    #     if (sell_orders[sell_index].price > buy_orders[buy_index].price):
    #         sell_index += 1
    #     elif sell_orders[sell_index].price < buy_orders[buy_index].price:
    #         buy_index += 1
    #     elif sell_orders[sell_index].price < buy


def match_market_sell_limit_buy(item):
    limit_buy_orders = BuyOrder.objects.all().filter(
        item=item, type='L', is_completed=False).order_by('-price', 'quantity')
    market_sell_orders = SellOrder.objects.all().filter(item=item, type='M',
                                                        is_completed=False).order_by('-price', 'quantity', 'created_at')
    buy_list = []
    sell_list = []

    # for buy_order in limit_buy_orders:

    # for sell_order in market_sell_orders:
    #     if


def create_transaction(order, type, price, quantity):
    if order.is_completed == True:
        return
    order.is_completed = True
    if order.quantity > quantity:
        order.quantity -= quantity
        order.is_completed = False
    order.save()
    Transaction.objects.create(
        item=order.item, price=price, quantity=quantity, type=type, owner=order.owner)


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
      sum2 +=list2[i]
  if sum1 != 0 and sum1 == sum2:
    return True
  return False


def matchSamePrice():
    list1.sort()
    list2.sort()
    matching(list1, list2, 0, 0, False)


def matching(list1, list2, index1, index2, sum1, sum2, check):
    #   global list1, list2, chosen1, chosen2

    if check:
        return

    if (index1 == len(list1) or index2 == len(list2)):
        if sum1 != 0 and sum1 == sum2:
            print(chosen1, end=' ')
            print(chosen2)
            print(list1, end=' ')
            print(list2)
            check = True
        return

    matching(index1+1, index2, sum1, sum2, check)
    chosen1[index1] = True
    matching(index1+1, index2, sum1 + list1[index1], sum2, check)
    chosen1[index1] = False

    matching(index1, index2+1, sum1, sum2, check)
    chosen2[index2] = True
    matching(index1, index2+1, sum1, sum2 + list2[index2], check)
