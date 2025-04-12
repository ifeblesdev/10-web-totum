from rest_framework import serializers
from .models import Environment

class EnvironmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Environment
        fields = ['id', 'description', 'restricted','authorization','disable']  
