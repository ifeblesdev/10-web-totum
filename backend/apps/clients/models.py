from django.db import models

# Create your models here.

class Client(models.Model):
    GENDER_CHOICES = [
        ('Hombre', 'Hombre'),
        ('Mujer', 'Mujer'),
        ('Otro', 'Otro'),
        ('No especifica', 'No especifica'),
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    id_number = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, default="España")
    birth_date = models.DateField(blank=True, null=True)
    gender = models.CharField(
        max_length=20, 
        choices=GENDER_CHOICES, 
        default="No especificado"
    )
    gdpr_consent = models.BooleanField(default=False)
    disable=models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        db_table='clients'
        verbose_name='Client'
        verbose_name_plural='Clients'


    def __str__(self):
        return f"{self.first_name} {self.last_name}"
