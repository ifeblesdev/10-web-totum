from django.db import models

class Configuration(models.Model):
    vat_included = models.BooleanField(null=True)  
    uses_commands = models.BooleanField(default=False) 
    uses_side_dishes = models.BooleanField(default=False)      
    multiple_boxes = models.BooleanField(default=False)
    uses_inventory = models.BooleanField(default=False)
    menu_screens = models.BooleanField(default=False)
    table_time = models.IntegerField(null=True)
    order_time = models.IntegerField(null=True)
    ordered_menu_code = models.BooleanField(default=False)
    local_configuration = models.BooleanField(default=False)
    product_code_button = models.BooleanField(default=False)
    send_commands_escape_takeaway = models.BooleanField(default=False)
    handles_tip = models.BooleanField(default=False)
    waiter_code_button = models.BooleanField(default=False)
    associate_row = models.BooleanField(default=False)
    uses_monitor = models.BooleanField(default=False)
    barcode_character_code = models.CharField(max_length=1, blank=True, null=True)
    uses_keyboard = models.BooleanField(default=False)
    price_button = models.BooleanField(default=False)
    waiter_name_button = models.BooleanField(default=False)
    customer_name_button = models.BooleanField(default=False)
    multiple_prices = models.BooleanField(default=False)
    uses_exchange_rate = models.BooleanField(default=False)
    exchange_rate = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    uses_reference_value = models.BooleanField(default=False)
    reference_value = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    reference_value_rounding = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    uses_currency = models.BooleanField(default=False)
    uses_total_rounding = models.BooleanField(default=False)
    disabled = models.BooleanField(default=False)
    close_table_totals = models.BooleanField(default=False)
    close_card_totals = models.BooleanField(default=False)
    close_sorted_by_group = models.BooleanField(default=False)
    close_sales_by_product = models.BooleanField(default=False)
    close_sales_by_invoice = models.BooleanField(default=False)
    close_expense_report = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        db_table='configuration'
        verbose_name='Configuration'
        verbose_name_plural='Configurations'
        ordering = ['id']


    def __str__(self):
        return f"Configuration"
