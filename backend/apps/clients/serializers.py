from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'first_name', 'last_name', 'id_number', 'email','phone', 'address','city','state','country','birth_date','gender','gdpr_consent','disable'] 


