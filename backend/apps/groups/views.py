from django.shortcuts import render
from rest_framework import viewsets
from .models import Group
from .serializers import GroupSerializer

# Create your views here.
class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all().order_by('description')
    serializer_class = GroupSerializer

