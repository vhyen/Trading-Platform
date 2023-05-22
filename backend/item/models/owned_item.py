
from django.db import models
from django.core.validators import MinValueValidator
import uuid as uuid

from account.models.account import Account
from item.models.item import Item


class OwnedItem(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    item = models.ForeignKey(Item, related_name='owneditem', on_delete=models.CASCADE)
    owner = models.ForeignKey(Account,related_name="owneditem", on_delete=models.CASCADE, null=False)
    quantity = models.BigIntegerField(default=0)
    
    
    