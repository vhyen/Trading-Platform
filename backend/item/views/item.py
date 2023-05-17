from rest_framework.viewsets import ModelViewSet

from item.models import Item
from item.serializers.item import ItemSerializer


class ItemViewSet(ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()