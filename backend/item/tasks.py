from django.http import HttpResponse
from django.db.models import Max, F, Q
from django.core.cache import cache
from backend.order.constants import CachePreferences
from order.models import BuyOrder
from celery import Celery, shared_task
from celery.schedules import crontab
from item.models import Item, PriceRecord

app = Celery('tasks', backend='redis://127.0.0.1:6379', broker='redis://127.0.0.1:6379')
app.conf.broker_url = 'redis: //127.0.0.1:6379/0'


@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Calls test('hello') every 10 seconds.
    sender.add_periodic_task(10.0, test.s('hello'), name='add every 10')

    # Calls test('world') every 30 seconds
    sender.add_periodic_task(30.0, test.s('world'), expires=10)

    # Executes every Monday morning at 7:30 a.m.
    sender.add_periodic_task(
        crontab(hour=7, minute=30, day_of_week=1),
        test.s('Happy Mondays!'),
    )
    
    sender.add_periodic_task(
        crontab(hour=0, minute=1),
        updateDayLastRecord(),
    )
    
    

@shared_task(bind=True)
def test_func(self):
    for i in range(10):
        print(i)
    print('Done')

@shared_task(bind=True)
def updateDayLastRecord():
    records = PriceRecord.objects.values('item', 'price').annotate(name=F('item__name')).distinct('item').order_by('item', '-datetime')
    for record in records:
        cache.set(record['name']+CachePreferences.ITEM_24H_LAST_PRICE, record['price'])