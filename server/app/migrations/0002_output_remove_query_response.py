# Generated by Django 4.2.2 on 2023-06-23 05:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Output',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('output', models.CharField(max_length=2000)),
            ],
        ),
        migrations.RemoveField(
            model_name='query',
            name='response',
        ),
    ]
