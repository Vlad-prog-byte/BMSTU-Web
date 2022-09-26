# Generated by Django 4.1 on 2022-09-20 20:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("news", "0002_alter_news_title"),
    ]

    operations = [
        migrations.CreateModel(
            name="Photo",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "photo",
                    models.ImageField(height_field=500, upload_to="", width_field=500),
                ),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("email_user", models.CharField(max_length=20, verbose_name="email")),
                ("password", models.CharField(max_length=12)),
                ("first_name", models.CharField(max_length=15)),
                ("last_name", models.CharField(max_length=10)),
                ("nickname", models.CharField(max_length=15)),
            ],
        ),
        migrations.DeleteModel(name="News",),
        migrations.AddField(
            model_name="photo",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="news.user"
            ),
        ),
    ]
