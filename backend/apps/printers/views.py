from django.shortcuts import render
from rest_framework import viewsets
from .models import Printer
from .serializers import PrinterSerializer

# Create your views here.
class PrinterViewSet(viewsets.ModelViewSet):
    queryset = Printer.objects.all()
    serializer_class = PrinterSerializer
