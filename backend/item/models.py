from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=200)
    description = models.CharField()
    # image = 
    # provider = 
    