from rest_framework import serializers
from .models import VatRate

class VatRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = VatRate
        fields = '__all__'
