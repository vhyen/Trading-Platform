from rest_framework import serializers

from order.models import BuyOrder


class BuyOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuyOrder
        fields = '__all__'
