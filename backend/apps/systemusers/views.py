from django.shortcuts import render
from rest_framework import viewsets
from .models import SystemUser
from .serializers import SystemUserSerializer

# Create your views here.
class SystemUserViewSet(viewsets.ModelViewSet):
    queryset = SystemUser.objects.all()
    serializer_class = SystemUserSerializer
