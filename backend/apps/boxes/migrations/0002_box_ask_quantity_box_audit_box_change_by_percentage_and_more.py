# Generated by Django 5.2 on 2025-04-30 11:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boxes', '0001_initial'),
        ('printers', '0001_initial'),
        ('waiters', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='box',
            name='ask_quantity',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='audit',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='change_by_percentage',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='close_with_open_tables',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='closing_printer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='box_closing_printer', to='printers.printer'),
        ),
        migrations.AddField(
            model_name='box',
            name='copies',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='box',
            name='footer',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='box',
            name='group_kitchen_tickets',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='group_products',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='handles_vat',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='header',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='box',
            name='inventory',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='kitchen_copies',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='box',
            name='kitchen_footer',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='box',
            name='kitchen_header',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='box',
            name='kitchen_lines',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='box',
            name='lines',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='box',
            name='opens_cash_drawer',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='percentage',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='box',
            name='print_kitchen_tickets',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='print_payment',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='printer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='box_printer', to='printers.printer'),
        ),
        migrations.AddField(
            model_name='box',
            name='prints_documents',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='side_items',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='takeaway_only',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='box',
            name='waiter',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='box_waiter', to='waiters.waiter'),
        ),
    ]
