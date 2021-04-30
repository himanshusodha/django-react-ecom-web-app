from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def jsonn(request):
    return JsonResponse({
        "Name": "HIMANSHU"
    })