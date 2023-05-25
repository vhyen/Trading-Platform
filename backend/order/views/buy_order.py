import django_filters
from django_filters import rest_framework as filters
from rest_framework import permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

from order.models import BuyOrder
from order.serializers.buy_order import BuyOrderSerializer, CreateBuyOrderSerializer


class BuyOrderFilter(filters.FilterSet):
    created_at__gt = django_filters.DateFilter(field_name='created_at', lookup_expr='date__gte')

    class Meta:
        model = BuyOrder
        fields = ['created_at__gt']


class BuyOrderPagination(PageNumberPagination):
    page_size = 5
    max_page_size = 100


class BuyOrderViewSet(ModelViewSet):
    serializer_class = BuyOrderSerializer
    queryset = BuyOrder.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = BuyOrderFilter
    pagination_class = BuyOrderPagination
    permission_classes = []


    def get_serializer_class(self):
        match self.action:
            case "create":
                return CreateBuyOrderSerializer
            case _:
                return BuyOrderSerializer

    def get_permissions(self):
        match self.action:
            case "create":
                return (permissions.IsAuthenticated(),)
            case _:
                return (permissions.AllowAny())
