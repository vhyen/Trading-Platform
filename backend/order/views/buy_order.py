import django_filters
from django.db.models import Sum, F
from django_filters import rest_framework as filters
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

from order.models import BuyOrder
from order.serializers.buy_order import BuyOrderSerializer, CreateBuyOrderSerializer, OrderBookSerializer


class BuyOrderFilter(filters.FilterSet):
    item = django_filters.CharFilter(field_name='item__name')

    class Meta:
        model = BuyOrder
        fields = ['item']


class BuyOrderPagination(PageNumberPagination):
    page_size = 15
    max_page_size = 100


class BuyOrderViewSet(ModelViewSet):
    serializer_class = BuyOrderSerializer
    queryset = BuyOrder.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = BuyOrderFilter
    pagination_class = BuyOrderPagination
    permission_classes = []

    def get_queryset(self):
        match self.action:
            case 'order_book':
                return self.queryset.filter(type='L').values('item__name', 'price') \
                    .annotate(total_quantity=Sum('quantity'),
                              total_filled=Sum('filled')).order_by('-price')
            case _:
                return self.queryset

    def get_serializer_class(self):
        match self.action:
            case "create":
                return CreateBuyOrderSerializer
            case 'order_book':
                return OrderBookSerializer
            case _:
                return BuyOrderSerializer

    def get_permissions(self):
        match self.action:
            case "create":
                return [permissions.IsAuthenticated(), ]
            case _:
                return [permissions.AllowAny(), ]

    @action(methods=['GET'], detail=False)
    def order_book(self, request):
        return self.list(request)
