from rest_framework.routers import SimpleRouter

from order.views.sell_order import SellOrderViewSet

router = SimpleRouter(trailing_slash=False)
router.register(r'^sell_order', SellOrderViewSet)
# router.register(r'^buy_order', BuyOrderViewSet)
urlpatterns = router.urls
