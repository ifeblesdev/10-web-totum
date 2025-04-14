from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'code', 'description', 'group', 'printer_commands1', 'printer_commands2', 'printer_commands3', 'printer_commands4', 'printer_commands5', 'printer_commands6', 'price1','price_with_vat1', 'price2', 'price_with_vat2', 'price3', 'price_with_vat3', 'currency_price1','currency_price_with_vat1','currency_price2','currency_price_with_vat2','currency_price3','currency_price_with_vat3','ask_quantity','ask_price','manages_time','takeaway_only','side_quantity','manages_weight','manages_percentage','optional_price','stock','average_cost','last_cost','account','manages_inventory','command_description','vat_type','additional_code','image_path','active','disabled']  
