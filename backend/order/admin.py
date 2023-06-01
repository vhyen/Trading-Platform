from django.contrib import admin

from order.models import BuyOrder, SellOrder


@admin.register(SellOrder)
class SellOrderAdmin(admin.ModelAdmin):
    list_display = ['item', 'price', 'quantity', 'owner']
    list_filter = ['price', 'quantity']


@admin.register(BuyOrder)
class BuyOrderAdmin(admin.ModelAdmin):
    list_display = ['item', 'price', 'quantity', 'owner']
    list_filter = ['price', 'quantity']
