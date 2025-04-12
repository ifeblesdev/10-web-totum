from django.shortcuts import render
from rest_framework import viewsets
from .models import Waiter
from .serializers import WaiterSerializer

# Create your views here.
class WaiterViewSet(viewsets.ModelViewSet):
    queryset = Waiter.objects.all()
    serializer_class = WaiterSerializer