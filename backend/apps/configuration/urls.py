from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ConfigurationViewSet

router = DefaultRouter()
router.register(r'configuration', ConfigurationViewSet,  basename='configuration')

urlpatterns = [
    path('api/', include(router.urls)), 
]
