from django.db import models
from django.core.validators import MinValueValidator
from django.utils.text import slugify
import uuid as uuid

from account.models.account import Account


# Create your models here.

class Item(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=200, blank=True, default='')
    description = models.CharField(blank=True)
    # image = models.ImageField()
    provider = models.ForeignKey(Account, on_delete=models.CASCADE, null=False)
    supply = models.BigIntegerField(validators=[MinValueValidator(1), ])
    current_price = models.DecimalField(max_digits=5, decimal_places=1, validators=[MinValueValidator(0.1), ],
                                        blank=False, null=False)
    change24 = models.DecimalField(max_digits=4, decimal_places=2, blank=False, null=False, default=0)

    def __str__(self):
        return self.name

        # ham update price

    def save(self, *args, **kwargs):
        if not self.slug or self.slug == '':
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
