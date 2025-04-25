from django.db import models

# Create your models here.

class Company(models.Model):
    description = models.CharField(max_length=120)
    id_number = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, default="España")
    disable=models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        db_table='companies'
        verbose_name='Company'
        verbose_name_plural='Companies'
        ordering = ['description']


    def __str__(self):
        return f"{self.description}"
