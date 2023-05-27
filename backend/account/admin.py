from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account


# Register your models here.

class CustomUserAdmin(UserAdmin):
    model = Account

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('balance', 'type')}),
    )


admin.site.register(Account, CustomUserAdmin)
