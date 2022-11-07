from django.db import models


class User(models.Model):
    nickname = models.CharField(unique=True, max_length=100, verbose_name='Пользователь', blank=False, null=False)
    password = models.CharField(max_length=20, verbose_name='Пароль', blank=False, null=False)
    photo = models.CharField(max_length=5000, verbose_name='Фото', default=None)

    class Meta:
        verbose_name = 'Пользователя'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return self.nickname

class Videos(models.Model):
    name_video = models.CharField(max_length=200, verbose_name='Название видео',  blank=False, null=False)
    title = models.CharField(max_length=1000, verbose_name='Описание к видео',  blank=True, null=True)
    href = models.CharField( max_length=1000, verbose_name='Ссылка_на_Видео',  blank=False, null=False)
    user = models.ForeignKey('User', on_delete=models.CASCADE, verbose_name='Владелец', blank=False, null=False)


    class Meta:
        verbose_name = 'Видео'
        verbose_name_plural = 'Видео'

    def __str__(self):
        return self.name_video

class Like_DisLikes(models.Model):
    likes = models.IntegerField(verbose_name='Лайки', default=0)
    dislikes = models.IntegerField(verbose_name='Дизлайки',  default=0)
    video = models.ForeignKey('Videos', on_delete=models.CASCADE)
    userLike = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Лайки и Дизлайки'
        verbose_name_plural = 'Лайки и Дизлайки'

    def __str__(self):
        return f' Лайки : {self.likes}\t Дизлайки : {self.dislikes}'