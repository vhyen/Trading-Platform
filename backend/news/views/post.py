import django_filters
from django.db.models import Sum, F
from django_filters import rest_framework as filters
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

from news.models import Post
from news.serializers.post import PostSerializer


class PostFilter(filters.FilterSet):
    title = django_filters.CharFilter(field_name='title')

    class Meta:
        model = Post
        fields = ['title']


class PostPagination(PageNumberPagination):
    page_size = 5
    max_page_size = 100


class PostViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = PostFilter
    pagination_class = PostPagination
