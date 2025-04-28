from rest_framework import viewsets
from .models import Configuration
from .serializers import ConfigurationSerializer

class ConfigurationViewSet(viewsets.ModelViewSet):
    queryset = Configuration.objects.all()
    serializer_class = ConfigurationSerializer
