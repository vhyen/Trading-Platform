from django.db.models import F
from django.core.cache import cache
from django.core.cache.backends.base import DEFAULT_TIMEOUT
from django.conf import settings
from celery import Celery, shared_task

from item.models import PriceRecord

app = Celery('tasks', backend='redis://127.0.0.1:6379', broker='redis://127.0.0.1:6379')
app.conf.broker_url = 'redis: //127.0.0.1:6379/0'

CACHE_TTL = getattr(settings, 'CACHE_TTL', DEFAULT_TIMEOUT)

@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Calls test('hello') every 10 seconds.
    sender.add_periodic_task(1.0, test.s('hi'), name='add every 10')

    # # Calls test('world') every 30 seconds
    # sender.add_periodic_task(30.0, test.s('world'), expires=10)

    # # Executes every Monday morning at 7:30 a.m.
    # sender.add_periodic_task(
    #     crontab(hour=7, minute=30, day_of_week=1),
    #     test.s('Happy Mondays!'),
    # )
    
    # sender.add_periodic_task(
    #     crontab(hour=0, minute=1),
    #     updateDayLastRecord(),
    #     name='update last 24h'
    # )
    pass
    
@app.task
def test(arg):
    print(arg)

@shared_task(bind=True)
def test_func(self):
    for i in range(10):
        print(i)
    print('Done')

@shared_task(bind=True)
def update_day_last_record(self):

    records = PriceRecord.objects.values('item', 'price').annotate(name=F('item__name')).distinct('item').order_by('item', '-datetime')
    for record in records:
        cache.set(record['name']+'_24h_last_price', record['price'], timeout=CACHE_TTL)
        print('Done update ', record['name']+'_24h_last_price', ' as ', record['price'])