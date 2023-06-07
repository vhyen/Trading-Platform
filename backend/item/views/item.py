import django_filters
from django.db.models import Sum, F
from django_filters import rest_framework as filters
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

from item.models import Item
from item.serializers.item import ItemSerializer


class ItemFilter(filters.FilterSet):
    item = django_filters.CharFilter(field_name='item__name')

    class Meta:
        model = Item
        fields = ['item']


class ItemPagination(PageNumberPagination):
    page_size = 10
    max_page_size = 100


class ItemViewSet(ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ItemFilter
    pagination_class = ItemPagination

    def get_queryset(self):
        match self.action:
            case 'popular':
                return self.queryset.annotate(market_cap=F('current_price')*F('supply')).order_by('-market_cap')[:5]
            case _:
                return self.queryset

    @action(methods=['GET'],detail=False)
    def popular(self,request):
        return self.list(request)