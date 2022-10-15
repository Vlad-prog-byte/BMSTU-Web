from django.urls import path, re_path
from .views import *


urlpatterns =[
    path("channel/<int:nick_id>/", page_user, name='channel'),
]