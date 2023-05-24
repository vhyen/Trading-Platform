from rest_framework.viewsets import ModelViewSet

from order.models import BuyOrder
from order.serializers.buy_order import BuyOrderSerializer


class ItemViewSet(ModelViewSet):
    serializer_class = BuyOrderSerializer
    queryset = BuyOrder.objects.all()
