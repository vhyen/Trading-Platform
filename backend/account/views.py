from django.http import HttpResponse
from django.shortcuts import render

from faker import Faker
from .models import Account
from item.models import Item
import random
import string 

def gen_account(request):
    fake = Faker()
    for i in range(200):
        profile = fake.simple_profile()
        name = profile['name'].split()
        account = Account(username=profile['username'], first_name=name[0], last_name=name[1], email=profile['mail'], password='123')
        account.save()
    return HttpResponse("OK")

def gen_coin(request):
    fake = Faker()
    for i in range(5):
        coin_name = random.choice(string.ascii_uppercase) + random.choice(string.ascii_uppercase) + random.choice(string.ascii_uppercase)
        profile = fake.simple_profile()
        name = profile['name'].split()
        account = Account(username=profile['username'], first_name=name[0], last_name=name[1], email=profile['mail'], password='123', type = 'P')
        account.save()
        item = Item(name = coin_name, provider = account, supply = 9437895, current_price = random.randint(50, 200))
        item.save()
        print(item)
    return HttpResponse(name)
    