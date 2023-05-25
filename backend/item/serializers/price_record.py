from datetime import datetime
from django.db.models import Case, When, Value, Avg, Max, Min, Q, Sum, F, Prefetch, Subquery, OuterRef
from django.db.models.functions import ExtractHour, ExtractMinute
from rest_framework import serializers
from itertools import chain
from item.models import OwnedItem, PriceRecord, Item
from item.serializers.item import ItemSerializer


class CandleSerializer(serializers.Serializer):
    name = serializers.CharField()
    # datetime = serializers.DateTimeField()
    hour = serializers.IntegerField()
    closest_quarter_of_hour = serializers.CharField()
    highest = serializers.FloatField()
    lowest = serializers.FloatField()
    open = serializers.FloatField()
    close = serializers.FloatField()


class PriceRecordSerializer(serializers.Serializer):
    def calculate(self):
        today = datetime.now().date().day
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
        first = price.annotate(close=F('price')).\
            values("hour", "closest_quarter_of_hour","close",name=F("item__name")).\
            filter(hour=OuterRef('hour'),
                   closest_quarter_of_hour=OuterRef('closest_quarter_of_hour'),
                   name=OuterRef("name")).\
            order_by("-datetime")[:1]


        second = price.annotate(open=F('price')).\
            values("hour", "closest_quarter_of_hour","open",name=F("item__name")).\
            filter(hour=OuterRef('hour'),
                   closest_quarter_of_hour=OuterRef('closest_quarter_of_hour'),
                   name=OuterRef("name")).\
            order_by("datetime")[:1]


        third = price.values("hour", "closest_quarter_of_hour",name=F("item__name"))\
            .annotate(highest=Max("price"),
                      lowest=Min("price"),
                      close=Subquery(first.values("close")),
                      open=Subquery(second.values("open")))
        return third
