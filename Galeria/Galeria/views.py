from django.http import HttpResponse
from django.shortcuts import render_to_response
from Galeria import settings
import datetime,os


def galeria(request):
    return render_to_response('galeria.html')

