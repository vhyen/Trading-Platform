from rest_framework.viewsets import ModelViewSet

from item.models import PriceRecord
from item.serializers.price_record import PriceRecordSerializer


class ItemViewSet(ModelViewSet):
    serializer_class = PriceRecordSerializer
    queryset = PriceRecord.objects.all()
