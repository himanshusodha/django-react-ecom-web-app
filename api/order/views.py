from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from .serializers import OrderSerialzers
from .models import Order
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt


def validate_user_session(id, token):
    UserModel = get_user_model()
    
    try:
        user = UserModel.objects.get(pk=id)
        if user.session_token == token:
            return True
        return False
    except UserModel.DoesNotExist:
        return False

@csrf_exempt
def add(request, id, token):
    if not validate_user_session(id, token):
        return JsonResponse({
            "Error": "Please login", 'code': "402"
        })
        
    if request.method == "POST":
        user.id = id
        transaction_id  = request.POST['transaction_id ']
        amount = request.POST['amount']
        products = request.POST['products']
        
        total_pro = len(products.split(','[:-1]))
        
        UserModel = get_user_model()
        
        try:
            user = UserModel.objects.get(pk=user_id)
            
        except UserModel.DoesNotExist:
            return JsonResponse({
                "Error": "User Does not exist"
            })
    
        ordr = Order(total_amount=amount,
                     user=user, 
                     product_names=products, 
                     total_product=total_pro,
                     transaction_id=transaction_id
                     )
        ordr.save()
        return JsonResponse({
            'sucess': True, 'error': False, 'msg': "Order Place DOne"
        })
    
    
    
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('id')
    serializer_class = OrderSerialzers