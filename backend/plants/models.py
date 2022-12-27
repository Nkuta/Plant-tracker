from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)


class Plant(models.Model):
    common_name= models.CharField(max_length=255)
    scientific_name= models.CharField(max_length=255)
    is_planted = models.BooleanField(default=False)
    summary= models.TextField(null=True, blank=True)
    image_url = models.CharField(max_length=255)
    quantity = models.PositiveSmallIntegerField(default=1)
    date_added_to_list = models.DateTimeField(auto_now_add=True)
    date_to_plant = models.DateField(blank=True,null=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)