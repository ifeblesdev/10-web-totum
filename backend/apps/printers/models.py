from django.db import models

# Create your models here.

class Printer(models.Model):
    description = models.CharField(max_length=120)
    disable = models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    

    class Meta:
        db_table='printers'
        verbose_name='Printer'
        verbose_name_plural='Printers'
        ordering = ['description']

    def __str__(self):
        return self.description