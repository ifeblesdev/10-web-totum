from django.db import models

# Create your models here.


class Environment(models.Model):
    description = models.CharField(max_length=120)
    restricted = models.BooleanField(default=False)
    authorization = models.BooleanField(default=False)
    disable = models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    

    class Meta:
        db_table='environments'
        verbose_name='Environment'
        verbose_name_plural='Environments'
        ordering = ['description']

    def __str__(self):
        return self.description