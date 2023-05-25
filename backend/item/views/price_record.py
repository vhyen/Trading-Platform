from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from item.models import PriceRecord
from item.serializers.price_record import CandleMinuteSerializer, CandleHourSerializer

from datetime import datetime

from django.db.models import Case, When, Value, Max, Min, F, Subquery, OuterRef, Sum, CharField
from django.db.models.functions import ExtractHour, ExtractMinute, ExtractDay, Floor, Concat, ExtractYear


def candle_minute_query(item, space):
    price = PriceRecord.objects.filter(item__name=item).annotate(
        date=Concat(ExtractYear('datetime'), Value("-"), ExtractDay("datetime"), Value("-"), ExtractHour("datetime"),
                    output_field=CharField()),
        closest_quarter_of_hour=Floor(ExtractMinute("datetime") / space))
    close_price = price.annotate(close=F('price')) \
                      .values("date", "closest_quarter_of_hour", "close", name=F("item__name")) \
                      .filter(date=OuterRef('date'),
                              closest_quarter_of_hour=OuterRef('closest_quarter_of_hour'),
                              name=OuterRef("name")) \
                      .order_by("-datetime")[:1]

    open_price = price.annotate(open=F('price')) \
                     .values("date", "closest_quarter_of_hour", "open", name=F("item__name")) \
                     .filter(date=OuterRef('date'),
                             closest_quarter_of_hour=OuterRef('closest_quarter_of_hour'),
                             name=OuterRef("name")) \
                     .order_by("datetime")[:1]

    final = price.values("date", "closest_quarter_of_hour", name=F("item__name")) \
        .annotate(highest=Max("price"),
                  lowest=Min("price"),
                  close=Subquery(close_price.values("close")),
                  open=Subquery(open_price.values("open")))
    return final


def candle_hour_query(item, space):
    price = PriceRecord.objects.filter(item__name=item).annotate(
        date=Concat(ExtractYear('datetime'), Value("-"), ExtractDay("datetime"), output_field=CharField()),
        closest_hour_of_day=Floor(ExtractHour("datetime") / space))

    close_price = price.annotate(close=F('price')) \
                      .values("date", "closest_hour_of_day", "close", name=F("item__name")) \
                      .filter(date=OuterRef('date'),
                              closest_hour_of_day=OuterRef('closest_hour_of_day'),
                              name=OuterRef("name")) \
                      .order_by("-datetime")[:1]

    open_price = price.annotate(open=F('price')) \
                     .values("date", "closest_hour_of_day", "open", name=F("item__name")) \
                     .filter(date=OuterRef('date'),
                             closest_hour_of_day=OuterRef('closest_hour_of_day'),
                             name=OuterRef("name")) \
                     .order_by("datetime")[:1]

    third = price.values("date", "closest_hour_of_day", name=F("item__name")) \
        .annotate(highest=Max("price"),
                  lowest=Min("price"),
                  close=Subquery(close_price.values("close")),
                  open=Subquery(open_price.values("open")))
    return third


class PriceRecordViewSet(ModelViewSet):
    serializer_class = CandleMinuteSerializer
    queryset = PriceRecord.objects.none()
    http_method_names = ["get"]

    def get_serializer_class(self):
        match self.action:
            case "candle_minute":
                return CandleMinuteSerializer
            case "candle_hour":
                return CandleHourSerializer

    def get_queryset(self):
        match self.action:
            case "candle_minute":
                return candle_minute_query(self.request.query_params["item"], int(self.request.query_params["space"]))
            case "candle_hour":
                return candle_hour_query(self.request.query_params["item"], int(self.request.query_params["space"]))

    @action(methods=["GET"], detail=False)
    def candle_minute(self, request):
        return self.list(request)

    @action(methods=["GET"], detail=False)
    def candle_hour(self, request):
        return self.list(request)
