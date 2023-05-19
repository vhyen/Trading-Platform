from django.http import HttpResponse
from account.models.account import Account
from item.models.item import Item
from rest_framework import status
from item.tasks import test_func

def test(request):
    test_func.delay()
    return HttpResponse("Alooooo")

def create_item(request):
    account = Account(username = 'default', password = '1', email = 'default@gmail.com', type = 'P', balance = 10)
    account.save()
    item = Item(name="BNB", description="sjkahf", provider=account, supply=203948, current_price = 93)
    item.save()
    return HttpResponse(status = status.HTTP_201_CREATED)