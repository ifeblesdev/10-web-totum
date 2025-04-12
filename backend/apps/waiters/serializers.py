from rest_framework import serializers
from .models import Waiter

class WaiterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Waiter
        fields = ['id', 'description', 'points', 'password', 'commands', 'disable']  
