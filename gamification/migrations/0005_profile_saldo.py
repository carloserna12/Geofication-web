# Generated by Django 4.0.4 on 2022-05-29 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gamification', '0004_profile_dep10_profile_dep11_profile_dep12_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='saldo',
            field=models.IntegerField(default=600),
        ),
    ]
