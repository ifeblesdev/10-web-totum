from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TableTypeViewSet

router = DefaultRouter()
router.register(r'tabletypes', TableTypeViewSet) 

urlpatterns = [
    path('api/', include(router.urls)),  
]
