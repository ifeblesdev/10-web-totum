from django.shortcuts import render
from rest_framework import viewsets
from .models import TableType
from .serializers import TableTypeSerializer

# Create your views here.
class TableViewSet(viewsets.ModelViewSet):
    queryset = TableType.objects.all()
    serializer_class = TableTypeSerializer