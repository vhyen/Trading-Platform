from rest_framework import serializers

from order.models import SellOrder


class SellOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellOrder
        fields = '__all__'
