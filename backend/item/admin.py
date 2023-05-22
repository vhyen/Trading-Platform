from django.contrib import admin

from item.models import OwnedItem, Item

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['name', 'provider', 'supply', 'current_price']
    
    
@admin.register(OwnedItem)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['get_item', 'owner', 'quantity']
    
    @admin.display(ordering='item__item', description='Item')
    def get_item(self, obj):
        return obj.item.name
    
