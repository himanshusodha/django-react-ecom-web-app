from rest_framework import routers
from django.urls import include,path

from .views import ProductViewSet

router = routers.DefaultRouter()
router.register( '', ProductViewSet)



urlpatterns = [
    
    path('', include(router.urls))
    
]