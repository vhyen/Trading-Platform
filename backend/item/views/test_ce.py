


from django.http import HttpResponse
from backend.item.tasks import test_func


def test(request):
    test_func.delay()
    return HttpResponse("Alooooo")