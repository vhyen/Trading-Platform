from django.db import models
from django.core.validators import MinValueValidator
import uuid as uuid

from account.models.account import Account
from item.models import Item


class Transaction(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=5,decimal_places=1, validators=[MinValueValidator(0.1)])
    quantity = models.BigIntegerField(validators=[MinValueValidator(1), ])
    owner = models.ForeignKey(Account, related_name='transaction', on_delete=models.CASCADE)
    total = models.DecimalField(max_digits=7, decimal_places=1, validators=[MinValueValidator(0.0)], default=0)
    type = models.CharField(choices=[('S', 'Sell'), ('B', 'Buy')])
    created_at = models.DateTimeField("Created at", auto_now_add=True)


    
    
