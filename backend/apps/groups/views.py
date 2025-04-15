from django.shortcuts import render
from rest_framework import viewsets, status
from .models import Group
from .serializers import GroupSerializer
from django.db.models import ProtectedError
from rest_framework.response import Response

# Create your views here.
class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all().order_by('description')
    serializer_class = GroupSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        try:
            self.perform_destroy(instance)
        except ProtectedError:
            return Response(
                {"detail": "No se puede eliminar el grupo porque tiene registros asociados."},
                status=status.HTTP_400_BAD_REQUEST
            )
        return Response(status=status.HTTP_204_NO_CONTENT)