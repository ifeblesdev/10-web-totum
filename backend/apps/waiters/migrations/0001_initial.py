# Generated by Django 5.2 on 2025-04-12 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Waiter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=120)),
                ('points', models.IntegerField(default=0)),
                ('password', models.CharField(max_length=20)),
                ('commands', models.BooleanField(default=False)),
                ('disable', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Waiter',
                'verbose_name_plural': 'Waiters',
                'db_table': 'waiters',
                'ordering': ['description'],
            },
        ),
    ]
