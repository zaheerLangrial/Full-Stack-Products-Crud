from django.urls import path
from .views import ProductListCreate, ProductDetail

urlpatterns = [
    path('products/', ProductListCreate.as_view()),
    path('products/<int:pk>/', ProductDetail.as_view()),
]