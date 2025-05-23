from django.shortcuts import render
from rest_framework import viewsets
from .models import Client
from .serializers import ClientSerializer

# Create your views here.
class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all().order_by('first_name')
    serializer_class = ClientSerializer
