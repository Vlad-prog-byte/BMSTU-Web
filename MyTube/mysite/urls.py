from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from news.views import main_page

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

    path('', main_page, name='home'),
    path('admin/', admin.site.urls, name='admin'),
    path('channel/', include('news.urls')),
    path('api/channel/<int:pk>/', views.ChannelView.as_view()),
    # path('api/v1/user/', views.UserViewSet.as_view({'get': 'list'})),
    # path('api/v1/userGet/<int:pk>', views.UserViewSet.as_view({'get': 'list'})),
    # path('api/v1/userUpdate/<int:pk>/', views.UserViewSet.as_view({'put': 'update'})),
    # path('api/v1/userCreate/<int:pk>/', views.UserViewSet.as_view({'post': 'create'}))

]
urlpatterns += router.urls



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
