from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserGroupViewSet

router = DefaultRouter()
router.register(r'usergroups', UserGroupViewSet) 

urlpatterns = [
    path('api/', include(router.urls)),  
]
