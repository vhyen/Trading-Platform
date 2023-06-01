from rest_framework import serializers

from account.models import Account
from item.models import Item, OwnedItem
from order.models import SellOrder
from order.tasks import match_sell_order


class SellOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellOrder
        fields = '__all__'


class CreateSellOrderSerializer(serializers.ModelSerializer):
    def validate(self, data):
        # supply = Item.objects.values_list("supply", flat=True).filter(name=data["item"])[0]
        own = Account.objects.values_list("owned_item__quantity", "owned_item__item__supply") \
            .filter(username=self.context.get('request').user, owned_item__item=data["item"])

        if own.count() == 0:
            raise serializers.ValidationError('You donnot have this item')
        total_sell = SellOrder.objects.values_list("quantity", flat=True).filter(item=data["item"], is_completed=False,
                                                                                 owner=self.context.get('request').user)
        is_selling = 0
        for sell in total_sell:
            is_selling += sell

        if data["quantity"] > own[0][1]:
            raise serializers.ValidationError('Quantity must less than supply')
        if data["quantity"] + is_selling > own[0][0]:
            raise serializers.ValidationError('Your total sell order quantity must less than your own')

        return data

    def create(self, validated_data):
        order = SellOrder.objects.create(**validated_data, owner=self.context.get('request').user)
        if order.type == 'M':
            match_sell_order(order)
        return order

    class Meta:
        model = SellOrder
        fields = ["item", "price", "quantity", "type"]
