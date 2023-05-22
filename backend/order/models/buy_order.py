from django.db import models
import uuid as uuid
from django.core.validators import MinValueValidator

from account.models.account import Account
from item.models import Item

ORDER_TYPES = [
    ('L', 'Limit'),
    ('M', 'Market'),
]
class BuyOrder(models.Model):
    uuid = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.BigIntegerField(validators=[
        MinValueValidator(1),
    ])
    owner = models.ForeignKey(
        Account, related_name='buy_order', on_delete=models.CASCADE)
    created_at = models.DateTimeField("Created at", auto_now_add=True)
    updated_at = models.DateTimeField("Updated at", auto_now=True)
    price = models.DecimalField(max_digits=5, decimal_places=1, validators=[
                                MinValueValidator(0.1)])

    type = models.CharField(choices=ORDER_TYPES, max_length=1)
    
    def save(self, *args, **kwargs):
        if self.quantity <= self.item.supply:
            super().save(*args, **kwargs)