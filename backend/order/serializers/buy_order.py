from rest_framework import serializers

from account.models import Account
from item.models import Item, OwnedItem
from order.models import SellOrder, BuyOrder


class BuyOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuyOrder
        fields = '__all__'


class CreateBuyOrderSerializer(serializers.ModelSerializer):
    def validate(self, data):
        supply = Item.objects.values_list("supply", flat=True).filter(name=data["item"])[0]
        balance = Account.objects.values_list("balance",flat=True).filter(username=self.context.get('request').user)[0]

        total_buy = BuyOrder.objects.values_list("quantity","price")\
            .filter(item=data["item"], owner=self.context.get('request').user)


        is_buying = 0
        for buy in total_buy:
            is_buying += buy[0] * buy[1]
        if data["quantity"] > supply:
            raise serializers.ValidationError('Quantity must less than supply')
        if data["quantity"] * data["price"] + is_buying > balance:
            raise serializers.ValidationError('You not enough money to order')

        return data

    def create(self, validated_data):
        order = BuyOrder.objects.create(**validated_data, owner=self.context.get('request').user)
        return order

    class Meta:
        model = BuyOrder
        fields = ["item", "price", "quantity", "type"]
