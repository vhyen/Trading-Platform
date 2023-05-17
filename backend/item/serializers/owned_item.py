from rest_framework import serializers

from item.models import OwnedItem


class OwnedItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnedItem
        fields = '__all__'
