from datetime import datetime
from django.db.models import Case, When, Value, Avg, Max, Min, Q, Sum, F, Prefetch, Subquery
from django.db.models.functions import ExtractHour, ExtractMinute
from rest_framework import serializers
from itertools import chain
from item.models import OwnedItem, PriceRecord, Item
from item.serializers.item import ItemSerializer


class CandleSerializer(serializers.Serializer):
    # datetime = serializers.DateTimeField()
    hour = serializers.IntegerField()
    closest_quarter_of_hour = serializers.CharField()
    #highest = serializers.FloatField()
    #lowest = serializers.FloatField()
    #open = serializers.FloatField()
    # close = serializers.FloatField()


class PriceRecordSerializer(serializers.Serializer):
    def calculate(self):
        today = datetime.now().date().day -1
        price = PriceRecord.objects.filter(datetime__day=today).annotate(
            hour=ExtractHour("datetime"),
            minute=ExtractMinute("datetime"),
        ).annotate(
            closest_quarter_of_hour=Case(
                When(minute__gte=0, minute__lt=15, then=Value('00-15')),
                When(minute__gte=15, minute__lt=30, then=Value('15-30')),
                When(minute__gte=30, minute__lt=45, then=Value('30-45')),
                When(minute__gte=45, then=Value('45-00')),
            )
        )
        first = price.values("hour", "closest_quarter_of_hour").distinct("hour", "closest_quarter_of_hour")\
            .order_by("hour", "closest_quarter_of_hour","-datetime")
        second = price.values("hour", "closest_quarter_of_hour").distinct("hour", "closest_quarter_of_hour")\
            .order_by("hour", "closest_quarter_of_hour","datetime")
        third = price.values("hour", "closest_quarter_of_hour").annotate(highest=Max("price"),lowest=Min("price"))
        i = first.annotate(price2=F("price"))
        print(i[0].price2)
        return first
