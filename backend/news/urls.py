from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import post

router = SimpleRouter(trailing_slash=False)
router.register(r'^post', post.PostViewSet)

urlpatterns = router.urls
