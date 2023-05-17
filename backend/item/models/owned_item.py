
from django.db import models
from django.core.validators import MinValueValidator
import uuid as uuid

from backend.auth.models.user import Account
from backend.item.models import Item

class OwnedItem(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    owner = models.ForeignKey(Account, on_delete=models.CASCADE, null=False)
    quantity = models.BigIntegerField(default=0)
    
    