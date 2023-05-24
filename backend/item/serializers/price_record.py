from rest_framework import serializers

from item.models import PriceRecord


class PriceRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceRecord
        fields = '__all__'
