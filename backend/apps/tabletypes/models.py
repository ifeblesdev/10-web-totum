from django.db import models

# Create your models here.


class TableType(models.Model):
    description = models.CharField(max_length=120)
    disable = models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    

    class Meta:
        db_table='tabletypes'
        verbose_name='TableType'
        verbose_name_plural='TableTypes'
        ordering = ['description']
        

    def __str__(self):
        return self.description