from django.db import models

# Create your models here.
class UserGroup(models.Model):
    description=models.CharField(max_length=80)
    default_box = models.ForeignKey('boxes.Box', on_delete=models.PROTECT, null=True, blank=True)
    default_table = models.ForeignKey('tables.Table', on_delete=models.PROTECT, null=True, blank=True)       
    orders_only = models.BooleanField(default=False)
    run_file_menu = models.BooleanField(default=False)
    run_config_menu = models.BooleanField(default=False)
    run_reports_menu = models.BooleanField(default=False)
    execute_close = models.BooleanField(default=False)
    print_order = models.BooleanField(default=False)
    reprint_order = models.BooleanField(default=False)
    open_box = models.BooleanField(default=False)
    move_table = models.BooleanField(default=False)
    split_table = models.BooleanField(default=False)
    change_waiter = models.BooleanField(default=False)
    require_waiter_password = models.BooleanField(default=False)
    view_sale = models.BooleanField(default=False)
    invoice_order = models.BooleanField(default=False)
    logout = models.BooleanField(default=False)
    other_options = models.BooleanField(default=False)
    group_row = models.BooleanField(default=False)
    decrease_row = models.BooleanField(default=False)
    repeat_row = models.BooleanField(default=False)
    repeat_last_row = models.BooleanField(default=False)
    delete_row = models.BooleanField(default=False)
    disable=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    

    class Meta:
        db_table='usergroups'
        verbose_name='UserGroup'
        verbose_name_plural='UserGroups'

    def __str__(self):
        return self.description