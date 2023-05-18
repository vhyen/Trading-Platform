from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import test_ce, item, owned_item

router = SimpleRouter(trailing_slash=False)
router.register(r'^item', item.ItemViewSet)
router.register(r'^owned_item', owned_item.OwnedItemViewSet)
urlpatterns = [
    path('test',test_ce.test, name='test'),
]
urlpatterns += router.urls
