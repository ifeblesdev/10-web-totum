from django.db import models

class SystemUser(models.Model):
    login = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=120)
    user_group = models.ForeignKey(
        'usergroups.UserGroup',
        on_delete=models.PROTECT  
    )
    box = models.ForeignKey(
        'boxes.Box',
        on_delete=models.PROTECT,
        null=True,
        blank=True  
    )
    disabled = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        db_table='systemusers'
        verbose_name='SystemUser'
        verbose_name_plural='SystemUsers'
        ordering = ['name']


    def __str__(self):
        return self.name
