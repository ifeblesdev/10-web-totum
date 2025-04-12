from rest_framework import serializers
from .models import Table

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ['id', 'description', 'copies', 'print', 'commercial_value', 'service', 'waiter', 'takeaway','vat', 'request_price', 'commands', 'surcharge', 'discount', 'vat_included', 'budget', 'cash_only', 'environment','table_type','printer_commands1','printer_commands2','disable']  
