from django.contrib import admin

from item.models import OwnedItem, Item, PriceRecord


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['name', 'provider', 'supply', 'current_price']


@admin.register(OwnedItem)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['item', 'owner', 'quantity']


@admin.register(PriceRecord)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['item', 'price', 'datetime']
    ordering = ['datetime']
