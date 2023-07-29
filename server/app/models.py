from django.db import models

# Create your models here.

class Query(models.Model):
    query = models.CharField(max_length=2000)

class Output(models.Model):
    output = models.CharField(max_length=2000)
