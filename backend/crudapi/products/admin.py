from django.contrib import admin
from .models import Product

# Register your models here.
class ProductAdmin (admin.ModelAdmin): 
    list_display = ('name', 'price', 'stock', 'category', 'is_active', 'created_at')
    list_filter = ('is_active', 'category')
    search_fields = ('name', 'description')
    ordering = ('-created_at',)



    
admin.site.register(Product, ProductAdmin)
