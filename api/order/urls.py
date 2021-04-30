from rest_framework import routers
from django.urls import include,path

from .views import OrderViewSet
from . import views
router = routers.DefaultRouter()
router.register( '', OrderViewSet)



urlpatterns = [
    
    path('add/<str:id>/<str:token>/', views.add , name="order.add")
    
]