from django.shortcuts import render
from django.http import JsonResponse
from .serializers import QuerySerializer, OutputSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Query, Output
from app.inference import infer
import requests

# Create your views here.

def post_data(input):
    url = 'http://127.0.0.1:8000/output/'
    temp = infer(input)
    data = {
        'output':temp
    }
    try:
        response = requests.post(url, json=data)
        response.raise_for_status()  
        return response
    except requests.exceptions.RequestException as error:
        print('Error posting data:', error)


@api_view(['GET', 'POST'])
def query_list(request):
    if request.method == 'GET':
        queries = Query.objects.all()
        serializer = QuerySerializer(queries, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = QuerySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            post_data(request.data["query"])
            return Response(serializer.data)


@api_view(['GET', 'POST'])
def output_list(request):
    if request.method == 'GET':
        queries = Output.objects.all()
        serializer = OutputSerializer(queries, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = OutputSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

