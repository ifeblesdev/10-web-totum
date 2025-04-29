from rest_framework import viewsets
from .models import UserGroup
from .serializers import UserGroupSerializer

class UserGroupViewSet(viewsets.ModelViewSet):
    queryset = UserGroup.objects.all()
    serializer_class = UserGroupSerializer
