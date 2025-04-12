from django.db import models

# Create your models here.


class Table(models.Model):
    description = models.CharField(max_length=120)
    copies = models.IntegerField(default=0)
    print = models.BooleanField(default=False)
    commercial_value = models.BooleanField(default=False)
    service = models.BooleanField(default=False)
    waiter = models.BooleanField(default=False)
    takeaway = models.BooleanField(default=False)
    vat = models.BooleanField(default=False)
    request_price = models.BooleanField(default=False)
    commands = models.BooleanField(default=False)
    surcharge = models.BooleanField(default=False)
    discount = models.BooleanField(default=False)
    vat_included = models.BooleanField(default=False)
    budget = models.BooleanField(default=False)
    cash_only = models.BooleanField(default=False)
    printer_commands1 = models.ForeignKey('printers.Printer', on_delete=models.CASCADE, related_name='printer_commands1', null=True, blank=True)
    printer_commands2 = models.ForeignKey('printers.Printer', on_delete=models.CASCADE, related_name='printer_commands2', null=True, blank=True)
    environment = models.ForeignKey('environments.Environment', on_delete=models.CASCADE)
    table_type = models.ForeignKey('tabletypes.TableType', on_delete=models.CASCADE, null=True, blank=True)
    disable = models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    

    class Meta:
        db_table='tables'
        verbose_name='Table'
        verbose_name_plural='Tables'
        ordering = ['description']

    def __str__(self):
        return self.description
    
