from django.http import HttpResponse
from celery import Celery, shared_task
from celery.schedules import crontab

from order.models import SellOrder, BuyOrder

app = Celery('tasks', backend='redis://127.0.0.1:6379', broker='redis://127.0.0.1:6379')
app.conf.broker_url = 'redis: //127.0.0.1:6379/0'


@app.task
def match_order():
    sell_orders = SellOrder.objects.all().order_by('-price')
    buy_orders = BuyOrder.objects.all().order_by('price')


