from django.shortcuts import render
from rest_framework import viewsets, status
from .models import Box
from .serializers import BoxSerializer
from django.db.models import ProtectedError
from rest_framework.response import Response

# Create your views here.
class BoxViewSet(viewsets.ModelViewSet):
    queryset = Box.objects.all()
    serializer_class = BoxSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        try:
            self.perform_destroy(instance)
        except ProtectedError:
            return Response(
                {"detail": "No se puede eliminar la caja porque tiene registros asociados."},
                status=status.HTTP_400_BAD_REQUEST
            )
        return Response(status=status.HTTP_204_NO_CONTENT)