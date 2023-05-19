from rest_framework.viewsets import ModelViewSet

from order.models import Transaction
from order.serializers.transaction import TransactionSerializer


class ItemViewSet(ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()
