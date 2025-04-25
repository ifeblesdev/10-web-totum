from django.db import models

class Box(models.Model):  
    code = models.IntegerField(primary_key=True)  
    description = models.CharField(max_length=120)  
    invoice_sequence = models.IntegerField(default=1) 
    disabled = models.BooleanField(default=False)  
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        db_table='boxes'
        verbose_name='Box'
        verbose_name_plural='Boxes'
        ordering = ['description']

    def __str__(self):
        return f"Caja {self.code}: {self.description}"
