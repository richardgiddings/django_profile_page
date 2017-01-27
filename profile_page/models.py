from __future__ import unicode_literals
from django.db import models

class Profile(models.Model):

    name = models.CharField(max_length=30,
                            help_text="The name of the person.")

    photo = models.ImageField(help_text="A photo of the person.")

    bio = models.TextField(max_length=200,
                           help_text="A short biography of the person.")