from django.db import models

# Create your models here.


class Product (models.Model) : 
    name= models.CharField(max_length=20)
    description= models.TextField(max_length=500, blank=True, null=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    category = models.CharField(max_length=20)
    stock = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name
    
    # class Meta:
    #     ordering = ['-created_at']
    
