# Generated by Django 4.1.3 on 2022-11-07 04:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("news", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="like_dislikes", old_name="user_like", new_name="userLike",
        ),
    ]