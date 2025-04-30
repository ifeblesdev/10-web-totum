from django.db import models


class Box(models.Model):  
    code = models.IntegerField(unique=True)  
    description = models.CharField(max_length=120)
    invoice_sequence = models.IntegerField(default=1) 
    disabled = models.BooleanField(default=False)  
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    percentage = models.IntegerField(null=True, blank=True)
    waiter = models.ForeignKey('waiters.Waiter', null=True, blank=True, on_delete=models.PROTECT, related_name='box_waiter')
    ask_quantity = models.BooleanField(default=False)
    inventory = models.BooleanField(default=False)
    takeaway_only = models.BooleanField(default=False)
    handles_vat = models.BooleanField(default=False)
    change_by_percentage = models.BooleanField(default=False)
    opens_cash_drawer = models.BooleanField(default=False)
    prints_documents = models.BooleanField(default=False)
    printer = models.ForeignKey('printers.Printer', null=True, blank=True, on_delete=models.PROTECT, related_name='box_printer')
    copies = models.IntegerField(default=1,null=True, blank=True)
    audit = models.BooleanField(default=False)
    close_with_open_tables = models.BooleanField(default=False)
    group_products = models.BooleanField(default=False)
    side_items = models.BooleanField(default=False)
    header = models.TextField(blank=True, null=True)
    lines = models.TextField(blank=True, null=True)
    footer = models.TextField(blank=True, null=True)
    print_command_tickets = models.BooleanField(default=False)
    command_header = models.TextField(blank=True, null=True)
    command_lines = models.TextField(blank=True, null=True)
    command_footer = models.TextField(blank=True, null=True)
    command_copies = models.IntegerField(default=1,null=True, blank=True)
    group_command_tickets = models.BooleanField(default=False)
    closing_printer = models.ForeignKey('printers.Printer', null=True, blank=True, on_delete=models.PROTECT, related_name='box_closing_printer')
    print_payment = models.BooleanField(default=False)

    class Meta:
        db_table = 'boxes'
        verbose_name = 'Box'
        verbose_name_plural = 'Boxes'
        ordering = ['description']

    def __str__(self):
        return f"Box {self.code}: {self.description}"





