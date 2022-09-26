from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from news.views import  main_page
urlpatterns = [
    path('news/', include('news.urls')),
    path('', main_page)
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
