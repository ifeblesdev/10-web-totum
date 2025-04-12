from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WaiterViewSet

router = DefaultRouter()
router.register(r'waiters', WaiterViewSet) 

urlpatterns = [
    path('api/', include(router.urls)),  
]
