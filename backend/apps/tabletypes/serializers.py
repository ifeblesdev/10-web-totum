from rest_framework import serializers
from .models import TableType

class TableTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableType
        fields = ['id', 'description', 'disable']  
