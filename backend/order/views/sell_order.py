import django_filters
from django.db.models import Sum
from django_filters import rest_framework as filters
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

from order.models import SellOrder
from order.serializers.sell_order import SellOrderSerializer, CreateSellOrderSerializer, OrderBookSerializer


class SellOrderFilter(filters.FilterSet):
    item = django_filters.CharFilter(field_name='item__name')

    class Meta:
        model = SellOrder
        fields = ['item']


class SellOrderPagination(PageNumberPagination):
    page_size = 15
    max_page_size = 100


class SellOrderViewSet(ModelViewSet):
    serializer_class = SellOrderSerializer
    queryset = SellOrder.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = SellOrderFilter
    pagination_class = SellOrderPagination
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
                return CreateSellOrderSerializer
            case 'order_book':
                return OrderBookSerializer
            case _:
                return SellOrderSerializer

    def get_permissions(self):
        match self.action:
            case "create":
                return [permissions.IsAuthenticated(),]
            case _:
                return [permissions.AllowAny(),]


    @action(methods=['GET'],detail=False)
    def order_book(self,request):
        return self.list(request)