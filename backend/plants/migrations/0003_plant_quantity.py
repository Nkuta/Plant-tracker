# Generated by Django 4.1.4 on 2022-12-26 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0002_plant'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant',
            name='quantity',
            field=models.PositiveSmallIntegerField(default=1),
        ),
    ]
