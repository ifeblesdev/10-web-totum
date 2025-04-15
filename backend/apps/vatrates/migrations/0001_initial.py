# Generated by Django 5.2 on 2025-04-15 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VatRates',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('general', 'General'), ('reducido', 'Reducido'), ('superreducido', 'Superreducido'), ('exento', 'Exento')], max_length=20)),
                ('percentage', models.DecimalField(decimal_places=2, max_digits=5)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'VatRate',
                'verbose_name_plural': 'VatRates',
                'db_table': 'vatrates',
                'ordering': ['type', '-start_date'],
                'unique_together': {('type', 'start_date')},
            },
        ),
    ]
