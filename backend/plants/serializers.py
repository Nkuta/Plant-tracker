from rest_framework import serializers
from .models import Plant


class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = ['id', 'common_name', 'scientific_name', 'is_planted',
                  'summary', 'image_url', 'quantity', 'date_added_to_list', 'date_to_plant']


    def create(self, validated_data):
        user_id = self.context['user_id']
        return Plant.objects.create(
            user_id=user_id,
            **validated_data
        )