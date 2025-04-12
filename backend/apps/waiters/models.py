from django.db import models

# Create your models here.


class Waiter(models.Model):
    description = models.CharField(max_length=120)
    points = models.IntegerField(default=0)
    password = models.CharField(max_length=20)
    commands = models.BooleanField(default=False)
    disable = models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    

    class Meta:
        db_table='waiters'
        verbose_name='Waiter'
        verbose_name_plural='Waiters'
        ordering = ['description']

    def __str__(self):
        return self.description