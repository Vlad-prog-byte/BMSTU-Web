from django.contrib import admin
from news.models import *

class UserAdmin(admin.ModelAdmin):
    list_display = ('nickname', 'password', 'photo')
    search_fields = ('nickname',)

class LikeDisLikesAdmin(admin.ModelAdmin):
    list_display = ('likes', 'dislikes', 'video')

admin.site.register(User, UserAdmin)
admin.site.register(Videos)
admin.site.register(Like_DisLikes, LikeDisLikesAdmin)
