from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid as uuid

ACCOUNT_TYPES = [
    ('P', 'Provider'),
    ('R', 'Regular'),
    ('V', 'VIP'),
]


class Account(AbstractUser):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    type = models.CharField(choices=ACCOUNT_TYPES, max_length=1, default='R')
    balance = models.DecimalField(max_digits=10, decimal_places=1,default=0)
