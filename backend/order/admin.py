from django.contrib import admin

from order.models import BuyOrder, SellOrder

admin.site.register(SellOrder)
admin.site.register(BuyOrder)