from rest_framework import serializers

from order.models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    item = serializers.CharField(source='item.name')
    created_at =  serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    class Meta:
        model = Transaction
        fields = '__all__'
