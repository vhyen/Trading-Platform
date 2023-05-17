from django.contrib import admin

from item.models import OwnedItem, Item

admin.site.register(Item)
admin.site.register(OwnedItem)
