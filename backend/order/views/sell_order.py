import django_filters
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.viewsets import ModelViewSet

from django_filters import rest_framework as filters

from order.models import SellOrder
from order.serializers.sell_order import SellOrderSerializer


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


