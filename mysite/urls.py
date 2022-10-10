from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from news.views import main_page

from rest_framework import routers
from news import views as news_views


router = routers.DefaultRouter()
router.register(r'news', news_views.UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    path('', main_page, name='home'),
    path('admin/', admin.site.urls, name='admin'),
    path('channel/', include('news.urls'))
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
