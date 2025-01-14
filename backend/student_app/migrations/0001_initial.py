# Generated by Django 5.1.1 on 2024-09-14 12:35

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Student",
            fields=[
                ("student_id", models.BigAutoField(primary_key=True, serialize=False)),
                ("first_name", models.CharField(max_length=50)),
                ("last_name", models.CharField(max_length=80)),
                (
                    "age",
                    models.IntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(0),
                            django.core.validators.MaxValueValidator(120),
                        ]
                    ),
                ),
                ("address", models.TextField()),
                ("grade", models.CharField(max_length=10)),
                ("major", models.CharField(max_length=100)),
            ],
        ),
    ]
