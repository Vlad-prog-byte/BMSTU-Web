import os

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, Http404
from .models import *

def main_page(request):
    nick_names = [i.nickname for i in User.objects.all()]
    context = {'nick' : nick_names}
    return render(request, 'news/main.html', context)



def person_page(request, nick):
    if nick not in [i.nickname for i in User.objects.all()]:
        print(nick)
        print(User.objects.all())
        return HttpResponse("<h1>Данного пользователя не существует</h1>")
    else:
        path = "news/static/img" + "/" + nick
        files = []
        for i in os.listdir(path):
            files.append('img/' + nick + '/' + i)
        context = {'nick' : nick, 'files' : files}
        return render(request, "news/person.html", context)


def archive(request, year):
    if (int(year) > 2020):
        raise Http404()

    return HttpResponse(f"<h1>Архив по годам</h1>{year}</p>")