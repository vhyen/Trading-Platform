from datetime import datetime

from django.db.models import Value, Max, Min, F, Subquery, OuterRef, CharField
from django.db.models.functions import ExtractHour, ExtractMinute, Floor, Concat
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet

from item.models import PriceRecord
from item.serializers.price_record import CandleSerializer


def candle_query(price):
    close_price = price.annotate(close=F('price')) \
                      .values("date", "closest_space", "close", name=F("item__name")) \
                      .filter(date=OuterRef('date'),
                              closest_space=OuterRef('closest_space'),
                              name=OuterRef("name")) \
                      .order_by("-datetime")[:1]

    open_price = price.annotate(open=F('price')) \
                     .values("date", "closest_space", "open", name=F("item__name")) \
                     .filter(date=OuterRef('date'),
                             closest_space=OuterRef('closest_space'),
                             name=OuterRef("name")) \
                     .order_by("datetime")[:1]

    return price.values("date", "closest_space", name=F("item__name")) \
        .annotate(highest=Max("price"),
                  lowest=Min("price"),
                  close=Subquery(close_price.values("close")),
                  open=Subquery(open_price.values("open")))


def candle_minute_query(item, space):
    price_minute = PriceRecord.objects \
        .filter(item__name=item) \
        .annotate(date=Concat(F('datetime__date'), Value("-"), ExtractHour("datetime"), output_field=CharField()),
                  closest_space=Floor(ExtractMinute("datetime") / space))
    return candle_query(price_minute)


def candle_hour_query(item, space):
    price_hour = PriceRecord.objects \
        .filter(item__name=item) \
        .annotate(date=F("datetime__date"), closest_space=Floor(ExtractHour("datetime") / space))
    return candle_query(price_hour)


def candle_now_minute_query(item, space):
    now_space = Floor(datetime.now().minute / space)
    latest_minute_price = PriceRecord.objects \
        .filter(item__name=item, datetime__date=datetime.now().date(), datetime__hour=datetime.now().hour) \
        .annotate(closest_space=Floor(ExtractMinute("datetime") / space)) \
        .filter(closest_space=now_space) \
        .annotate(date=Concat(F('datetime__date'), Value("-"), ExtractHour("datetime"), output_field=CharField()))

    return candle_query(latest_minute_price)


def candle_now_hour_query(item, space):
    now_space = Floor(datetime.now().hour / space)
    latest_hour_price = PriceRecord.objects.filter(item__name=item, datetime__date=datetime.now().date()) \
        .annotate(date=F("datetime__date"), closest_space=Floor(ExtractHour("datetime") / space)) \
        .filter(closest_space=now_space)

    return candle_query(latest_hour_price)


class PriceRecordViewSet(ModelViewSet):
    serializer_class = CandleSerializer
    queryset = PriceRecord.objects.none()
    http_method_names = ["get"]

    def get_queryset(self):
        match self.action:
            case "candle_minute":
                return candle_minute_query(self.request.query_params["item"],
                                           int(self.request.query_params["space"]))
            case "candle_hour":
                return candle_hour_query(self.request.query_params["item"],
                                         int(self.request.query_params["space"]))
            case "candle_now_minute":
                return candle_now_minute_query(self.request.query_params["item"],
                                               int(self.request.query_params["space"]))
            case "candle_now_hour":
                return candle_now_hour_query(self.request.query_params["item"],
                                             int(self.request.query_params["space"]))

    @action(methods=["GET"], detail=False)
    def candle_minute(self, request):
        return self.list(request)

    @action(methods=["GET"], detail=False)
    def candle_hour(self, request):
        return self.list(request)

    @action(methods=["GET"], detail=False)
    def candle_now_minute(self, request):
        return self.list(request)

    @action(methods=["GET"], detail=False)
    def candle_now_hour(self, request):
        return self.list(request)
