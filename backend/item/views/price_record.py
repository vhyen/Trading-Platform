from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from item.models import PriceRecord
from item.serializers.price_record import PriceRecordSerializer, CandleSerializer


class PriceRecordViewSet(GenericViewSet):
    queryset = PriceRecord.objects.none()



    def get_serializer_class(self):
        match self.action:
            case "candle":
                return PriceRecordSerializer


    @action(methods=["GET"],detail=False)
    def candle(self,request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.calculate()
        return Response(CandleSerializer(data,many=True).data)
