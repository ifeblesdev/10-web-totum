from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VatRateViewSet

router = DefaultRouter()
router.register(r'vatrates', VatRateViewSet) 

urlpatterns = [
    path('api/', include(router.urls)),  
]
