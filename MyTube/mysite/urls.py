from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

from rest_framework import routers
from news import views as news_views
from news import views

router = routers.SimpleRouter()
router.register(r'api/video', views.VideoViewSet)
router.register(r'api/users', views.UserViewSet)
router.register(r'api/likesDislikes', views.Like_DisLikesViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls, name='admin'),
    path('api/users/', views.UserViewSet.as_view({'get': 'list'})),
    # path('api/channel/<int:pk>', views.ChannelView.as_view()),
    path('api/channel/<int:pk>', views.VideosChannelView.as_view()),
    path('api/videos/<int:user>', views.VideoViewSet.as_view({'get':'list'})),
    path('api/search/', views.search),
    path('api/likeDislike', views.likeDisLikes),
    path('api/likeDislike/delete', views.likeDislikeDelete)
]
urlpatterns += router.urls



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
