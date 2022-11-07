from news.models import User
from news.models import Videos
from news.models import Like_DisLikes
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = User
        # Поля, которые мы сериализуем
        fields = ["pk", "nickname", "password", "photo"]


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Videos
        # Поля, которые мы сериализуем
        fields = ["pk", "name_video", "title", "href", "user"]

class Like_DisLikesSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Like_DisLikes
        # Поля, которые мы сериализуем
        fields = ["pk", "likes", "dislikes", "video", "userLike"]