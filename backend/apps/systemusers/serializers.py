from rest_framework import serializers
from .models import SystemUser

class SystemUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemUser
        fields = '__all__'