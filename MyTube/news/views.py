import os

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, Http404
from rest_framework.decorators import api_view

from .models import *
from rest_framework import viewsets
from news.serializers import UserSerializer
from news.serializers import VideoSerializer
from news.serializers import Like_DisLikesSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

from django.db.models import Q



@api_view(['POST'])
def likeDislikeDelete(request):
    data = request.data

    Like_DisLikes.objects.filter(video=data['video'], userLike=data['userLike']).delete()
    return Response({'stutus' : 'deleted'})


@api_view(['POST'])
def likeDisLikes(request):
    data = request.data
    print(data)
    try:
        like = Like_DisLikes.objects.get(video=data['video'], userLike=data['userLike'])
        like.likes = data['likes']
        like.dislikes = data['dislikes']
        like.save()
        return Response({'ok':'ok'})
    except:
        new_like = Like_DisLikes()
        new_like.likes = data['likes']
        new_like.dislikes = data['dislikes']
        new_like.userLike = User.objects.get(pk=data['userLike'])
        new_like.video = Videos.objects.get(pk=data['video'])
        new_like.save()
        return Response({'ok':'ok'})


@api_view(['GET'])
def search(request):
    searchData = request.GET.get('search')
    videos = list(Videos.objects.filter(Q(name_video__icontains=searchData) | Q(title__icontains=searchData)).values())
    return Response(videos)


def getLikesDislikes(pk):
    result = list(Like_DisLikes.objects.filter(video=pk).values_list('likes', 'dislikes'))
    likes = sum([x[0] for x in result])
    dislike = sum([x[1] for x in result])
    spisok = {'likes': likes, 'dislikes': dislike}
    return spisok


class VideosChannelView(APIView):
    def get(self, request, pk):
        # id канала

        results = list(Videos.objects.filter(user=pk).values())
        for i in results:
            i.update(getLikesDislikes(i['id']))
        return Response(results)



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