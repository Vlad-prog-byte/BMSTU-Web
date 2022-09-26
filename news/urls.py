from django.urls import path, re_path
from .views import *


urlpatterns =[
    path('person/<str:nick>/', person_page),
#    re_path(r'^a/(?P<year>[0-9]{4})/', archive),
]