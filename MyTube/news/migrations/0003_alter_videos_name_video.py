# Generated by Django 4.1 on 2022-10-01 23:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("news", "0002_alter_user_nickname"),
    ]

    operations = [
        migrations.AlterField(
            model_name="videos",
            name="name_video",
            field=models.CharField(max_length=100, verbose_name="Название видео"),
        ),
    ]
