from django.contrib import admin

from order.models import BuyOrder, SellOrder


@admin.register(SellOrder)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['item', 'price', 'quantity', 'owner']


@admin.register(BuyOrder)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['item', 'price', 'quantity', 'owner']
