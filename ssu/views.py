from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Url
import uuid

# Create your views here.


def index(request):
    return render(request, "index.html")


def create(request):
    if request.method == "POST":
        link = request.POST["link"]
        uid = str(uuid.uuid4())[:8]
        new_url = Url(link=link, uuid=uid)
        new_url.save()
        return HttpResponse(uid)


def open(request, pk):
    url_link = Url.objects.get(uuid=pk)
    return redirect(url_link.link)
