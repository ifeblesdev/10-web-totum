from django.db import models

# Create your models here.
class Group(models.Model):
    description=models.CharField(max_length=80)
    accompaniment=models.BooleanField(default=False)
    same_screen=models.BooleanField(default=False)
    show_order=models.BooleanField(default=True)
    disable=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    

    class Meta:
        db_table='groups'
        verbose_name='Group'
        verbose_name_plural='Groups'

    def __str__(self):
        return self.description