
from django.db import models
from django.core.validators import MinValueValidator
import uuid as uuid

from account.models.account import Account


# Create your models here.

class Item(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=200)
    description = models.CharField()
    # image = models.ImageField()
    provider = models.ForeignKey(Account, on_delete=models.CASCADE, null=False)
    supply = models.BigIntegerField(validators=[
        MinValueValidator(1),
    ])
    current_price = models.DecimalField(max_digits=5,decimal_places=1, blank=False, null=False)
    
    # ham update price
    
    