from django.db import models


class player(models.Model):
    name = models.CharField(max_length=255, verbose_name=u"Nickname")
    email = models.EmailField(null=True, blank=True)
    score = models.IntegerField(max_length=1000000, verbose_name=u"Score", null=True, blank=True)

    def __str__(self):
        return self.name