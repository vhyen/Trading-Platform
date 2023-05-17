from django.db import models
import uuid as uuid
from django.core.validators import MinValueValidator
from backend.auth.models.user import Account
from backend.item.models import Item

class SellOrder(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    item = models.ForeignKey(Item,on_delete=models.CASCADE)
    quantity = models.BigIntegerField(validators=[
        MinValueValidator(1),
    ])
    owner = models.ForeignKey(Account,on_delete=models.CASCADE)
    created_at = models.DateTimeField("Created at",auto_now_add=True)
    updated_at = models.DateTimeField("Updated at", auto_now=True)
    price = models.DecimalField(decimal_places=1, validators=[MinValueValidator(0.1)])