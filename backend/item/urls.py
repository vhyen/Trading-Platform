from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import test_ce, item, owned_item, price_record

router = SimpleRouter(trailing_slash=False)
router.register(r'^item', item.ItemViewSet)
router.register(r'^owned_item', owned_item.OwnedItemViewSet)
router.register(r'^price_record', price_record.PriceRecordViewSet)
urlpatterns = [
    path('',test_ce.create_item, name='test'),
]
urlpatterns += router.urls
