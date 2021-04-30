from rest_framework import serializers
from .models import Order


class OrderSerialzers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('user')