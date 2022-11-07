import os

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, Http404
from .models import *
from rest_framework import viewsets
from news.serializers import UserSerializer
from news.serializers import VideoSerializer
from news.serializers import Like_DisLikesSerializer
from rest_framework.views import APIView
from rest_framework.response import Response



class ChannelView(APIView):
    def get(self, request, pk):
        result = list()
        for i in list(Videos.objects.filter(user=pk)):
            result.append(
                {
                    "name": i.name_video,
                    "href": i.href
                }
            )
        return Response({"videoNames" : result})


class UserViewSet(viewsets.ModelViewSet):
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = User.objects.all()
    serializer_class = UserSerializer  # Сериализатор для модели

class VideoViewSet(viewsets.ModelViewSet):
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Videos.objects.all()
    serializer_class = VideoSerializer  # Сериализатор для модели

class Like_DisLikesViewSet(viewsets.ModelViewSet):
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Like_DisLikes.objects.all()
    serializer_class = Like_DisLikesSerializer  # Сериализатор для модели

def page_user(request, nick_id):
    print('TESTTTTTTTTTTT')
    print(nick_id)
    info = User.objects.get(id=nick_id)
    video = Videos.objects.filter(user=nick_id)
    print(video)
    context = {'user': info, 'video': video}
    print(info.photo)
    return render(request, "news/channel.html", context=context)


def main_page(request):
    users = User.objects.all()
    context = {'users': users}
    print(users[0].nickname, users[0].pk)
    return render(request, 'news/base.html', context=context)

#
#
# def person_page(request, nick):
#     if nick not in [i.nickname for i in User.objects.all()]:
#         print(nick)
#         print(User.objects.all())
#         return HttpResponse("<h1>Данного пользователя не существует</h1>")
#     else:
#         path = "news/static/img" + "/" + nick
#         files = []
#         for i in os.listdir(path):
#             files.append('img/' + nick + '/' + i)
#         context = {'nick' : nick, 'files' : files}
#         return render(request, "news/person.html", context)
#
#
# def archive(request, year):
#     if (int(year) > 2020):
#         raise Http404()
#
#     return HttpResponse(f"<h1>Архив по годам</h1>{year}</p>")