from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import tasks
from .views.item import ItemViewSet
from .views.owned_item import OwnedItemViewSet

router = SimpleRouter(trailing_slash=False)
router.register(r'^item', ItemViewSet)
router.register(r'^owned_item', OwnedItemViewSet)
urlpatterns = [
    path('test',tasks.test, name='test'),
]
urlpatterns += router.urls
