


from django.http import HttpResponse

from item.tasks import test_func



def test(request):
    test_func.delay()
    return HttpResponse("Alooooo")

