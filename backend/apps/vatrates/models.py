from django.db import models

class VatRate(models.Model):
    TIPO_CHOICES = [
        ('general', 'General'),
        ('reducido', 'Reducido'),
        ('superreducido', 'Superreducido'),
        ('exento', 'Exento'),
        # Puedes añadir más si necesitas
    ]

    type = models.CharField(max_length=20, choices=TIPO_CHOICES)
    percentage = models.DecimalField(max_digits=5, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)  # null = vigente
    description = models.TextField(blank=True, null=True)

    class Meta:
        db_table='vatrates'
        verbose_name = "VatRate"
        verbose_name_plural = "VatRates"
        ordering = ['type', '-start_date']
        unique_together = ('type', 'start_date')


    def __str__(self):
        rango = f"{self.start_date} - {self.end_date or 'vigente'}"
        return f"{self.get_tipo_display()} ({self.percentage}%) desde {rango}"
