from django.urls import path,include

from . import views

urlpatterns = [
    path('gettoken/<str:id>/<str:token>/', views.genrate_token, name="token.genrate" ),
    path('process/<str:id>/<str:token>/', views.process_payment, name="payment.process" )
]
