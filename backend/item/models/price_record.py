
from django.db import models
from django.core.validators import MinValueValidator

from uuid import uuid
from item.models.item import Item

# Create your models here.

class PriceRecord(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    datetime = models.DateTimeField(auto_now_add=True)
    price = models.DecimalField(max_digits=5,decimal_places=1, blank=False, null=False)
    item = models.ForeignKey(Item, related_name='price_record', on_delete=models.CASCADE)