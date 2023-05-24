from rest_framework import serializers

from item.models import OwnedItem
from item.serializers.item import ItemSerializer


class OwnedItemSerializer(serializers.ModelSerializer):
    item = ItemSerializer()

    class Meta:
        model = OwnedItem
        fields = ["quantity","item"]
