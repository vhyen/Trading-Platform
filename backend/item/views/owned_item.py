from rest_framework.viewsets import ModelViewSet

from item.models import OwnedItem
from item.serializers.owned_item import OwnedItemSerializer


class OwnedItemViewSet(ModelViewSet):
    serializer_class = OwnedItemSerializer
    queryset = OwnedItem.objects.all()