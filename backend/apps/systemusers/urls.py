from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SystemUserViewSet

router = DefaultRouter()
router.register(r'systemusers', SystemUserViewSet) 

urlpatterns = [
    path('api/', include(router.urls)),  
]
