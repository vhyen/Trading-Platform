from rest_framework import serializers

from item.models import PriceRecord


class CandleMinuteSerializer(serializers.Serializer):
    name = serializers.CharField()
    date = serializers.CharField()
    closest_quarter_of_hour = serializers.IntegerField()
    highest = serializers.FloatField()
    lowest = serializers.FloatField()
    open = serializers.FloatField()
    close = serializers.FloatField()

class CandleHourSerializer(serializers.Serializer):
    name = serializers.CharField()
    date = serializers.CharField()
    closest_hour_of_day = serializers.IntegerField()
    highest = serializers.FloatField()
    lowest = serializers.FloatField()
    open = serializers.FloatField()
    close = serializers.FloatField()

