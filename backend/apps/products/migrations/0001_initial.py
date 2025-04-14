# Generated by Django 5.2 on 2025-04-14 18:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('groups', '0001_initial'),
        ('printers', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(blank=True, max_length=50, null=True)),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
                ('command_description', models.CharField(blank=True, max_length=255, null=True)),
                ('vat_type', models.CharField(blank=True, max_length=50, null=True)),
                ('price1', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('price_with_vat1', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('price2', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('price_with_vat2', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('price3', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('price_with_vat3', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('currency_price1', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('currency_price_with_vat1', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('currency_price2', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('currency_price_with_vat2', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('currency_price3', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('currency_price_with_vat3', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('ask_quantity', models.BooleanField(default=False)),
                ('ask_price', models.BooleanField(default=False)),
                ('manages_time', models.BooleanField(default=False)),
                ('takeaway_only', models.BooleanField(default=False)),
                ('additional_code', models.CharField(blank=True, max_length=100, null=True)),
                ('side_quantity', models.IntegerField(blank=True, null=True)),
                ('manages_weight', models.BooleanField(default=False)),
                ('image_path', models.ImageField(blank=True, null=True, upload_to='product_images/')),
                ('active', models.BooleanField(default=True)),
                ('manages_percentage', models.BooleanField(default=False)),
                ('optional_price', models.BooleanField(default=False)),
                ('stock', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('average_cost', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('last_cost', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('account', models.BooleanField(default=True)),
                ('manages_inventory', models.BooleanField(default=True)),
                ('disabled', models.BooleanField(default=False)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group', to='groups.group')),
                ('printer_commands1', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_printer_commands1', to='printers.printer')),
                ('printer_commands2', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_printer_commands2', to='printers.printer')),
                ('printer_commands3', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_printer_commands3', to='printers.printer')),
                ('printer_commands4', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_printer_commands4', to='printers.printer')),
                ('printer_commands5', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_printer_commands5', to='printers.printer')),
                ('printer_commands6', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_printer_commands6', to='printers.printer')),
            ],
            options={
                'verbose_name': 'Product',
                'verbose_name_plural': 'Products',
                'db_table': 'products',
                'ordering': ['description'],
            },
        ),
    ]
