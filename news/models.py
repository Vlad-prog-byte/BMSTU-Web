from django.db import models


class User(models.Model):
    email_user = models.CharField(max_length=20)
    password = models.CharField(max_length=12)
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=10)
    nickname = models.CharField(max_length=15, unique=True)
    def __str__(self):
        return self.nickname

class Photo(models.Model):
    photo = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return 'Фотка пользователя: ' + self.user.nickname