from django.db import models



class Category(models.Model):
    name = models.CharField(max_length=256)
    description = models.CharField(max_length=500)
    crated_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    
    
    
    def __str__(self):
        return self.name
    