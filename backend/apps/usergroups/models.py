from django.db import models

# Create your models here.
class UserGroup(models.Model):
    description=models.CharField(max_length=80)
    disable=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    

    class Meta:
        db_table='usergroups'
        verbose_name='UserGroup'
        verbose_name_plural='UserGroups'

    def __str__(self):
        return self.description