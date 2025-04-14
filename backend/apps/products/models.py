from django.db import models

class Product(models.Model):
    code = models.CharField(max_length=50, null=True, blank=True)
    description = models.CharField(max_length=255, null=True, blank=True)
    group = models.ForeignKey('groups.Group', on_delete=models.CASCADE,related_name='group')
    command_description = models.CharField(max_length=255, null=True, blank=True)
    vat_type = models.CharField(max_length=50, null=True, blank=True)

    price1 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    price_with_vat1 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    price2 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    price_with_vat2 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    price3 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    price_with_vat3 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    currency_price1 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency_price_with_vat1 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency_price2 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency_price_with_vat2 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency_price3 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    currency_price_with_vat3 = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    printer_commands1 = models.ForeignKey('printers.Printer', on_delete=models.CASCADE, related_name='printer_commands1', null=True, blank=True)
    printer_commands2 = models.ForeignKey('printers.Printer', on_delete=models.CASCADE, related_name='printer_commands2', null=True, blank=True)
    printer_commands3 = models.ForeignKey('printers.Printer', on_delete=models.CASCADE, related_name='printer_commands3', null=True, blank=True)
    printer_commands4 = models.ForeignKey('printers.Printer', on_delete=models.CASCADE, related_name='printer_commands4', null=True, blank=True)
    printer_commands5 = models.ForeignKey('printers.Printer', on_delete=models.CASCADE, related_name='printer_commands5', null=True, blank=True)
    printer_commands6 = models.ForeignKey('printers.Printer', on_delete=models.CASCADE, related_name='printer_commands6', null=True, blank=True)

    ask_quantity = models.BooleanField(default=False)
    ask_price = models.BooleanField(default=False)
    manages_time = models.BooleanField(default=False)
    takeaway_only = models.BooleanField(default=False)

    additional_code = models.CharField(max_length=100, null=True, blank=True)
    side_quantity = models.IntegerField(null=True, blank=True)
    manages_weight = models.BooleanField(default=False)

    image_path = models.ImageField(upload_to='product_images/', null=True, blank=True)

    active = models.BooleanField(default=True)
    manages_percentage = models.BooleanField(default=False)
    optional_price = models.BooleanField(default=False)

    stock = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    average_cost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    last_cost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    account = models.BooleanField(default=True)
    manages_inventory = models.BooleanField(default=True)
    disabled = models.BooleanField(default=False)


    class Meta:
        db_table='products'
        verbose_name='Product'
        verbose_name_plural='Products'
        ordering = ['description']


    def __str__(self):
        return f"Product(code='{self.code}', description='{self.description}')"
