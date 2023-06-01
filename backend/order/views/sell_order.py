import django_filters
from django_filters import rest_framework as filters
from rest_framework import permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

from order.models import SellOrder
from order.serializers.sell_order import SellOrderSerializer, CreateSellOrderSerializer


class SellOrderFilter(filters.FilterSet):
    created_at__gt = django_filters.DateFilter(field_name='created_at', lookup_expr='date__gte')

    class Meta:
        model = SellOrder
        fields = ['created_at__gt']


class SellOrderPagination(PageNumberPagination):
    page_size = 5
    max_page_size = 100


class SellOrderViewSet(ModelViewSet):
    serializer_class = SellOrderSerializer
    queryset = SellOrder.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = SellOrderFilter
    pagination_class = SellOrderPagination
    permission_classes = []


    def get_serializer_class(self):
        match self.action:
            case "create":
                return CreateSellOrderSerializer
            case _:
                return SellOrderSerializer

    def get_permissions(self):
        match self.action:
            case "create":
                return [permissions.IsAuthenticated(),]
            case _:
                return [permissions.AllowAny,]
