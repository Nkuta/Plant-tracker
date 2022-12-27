from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.mixins import CreateModelMixin,RetrieveModelMixin,DestroyModelMixin,UpdateModelMixin
from rest_framework.viewsets import ModelViewSet,GenericViewSet
from .models import Plant
from .serializers import PlantSerializer

# Create your views here.


class PlantViewSet(ModelViewSet):
    
    serializer_class = PlantSerializer

    def get_queryset(self):
        return Plant.objects.filter(user_id=self.request.user.id)

    def get_serializer_context(self):
        return {
            'user_id':self.request.user.id
        }