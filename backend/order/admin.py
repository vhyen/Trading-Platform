from django.contrib import admin

from order.models import BuyOrder, SellOrder, Transaction


@admin.register(SellOrder)
class SellOrderAdmin(admin.ModelAdmin):
    list_display = ['item', 'price', 'filled', 'quantity', 'owner', 'is_completed','type','total']
    list_filter = ['price', 'quantity']


@admin.register(BuyOrder)
class BuyOrderAdmin(admin.ModelAdmin):
    list_display = ['item', 'price', 'filled', 'quantity', 'owner', 'is_completed','type','total']
    list_filter = ['price', 'quantity']


@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ['item', 'price', 'quantity', 'owner', 'type','total']
    ordering = ['created_at']