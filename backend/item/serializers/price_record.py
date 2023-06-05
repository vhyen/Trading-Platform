from rest_framework import serializers


class CandleSerializer(serializers.Serializer):
    name = serializers.CharField()
    date = serializers.CharField()
    closest_space = serializers.IntegerField()
    highest = serializers.FloatField()
    lowest = serializers.FloatField()
    open = serializers.FloatField()
    close = serializers.FloatField()

