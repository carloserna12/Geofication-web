from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='batman.png')
    saldo = models.IntegerField(default=600)

    dep1 = models.ImageField(default='Silueta Insignias.png')
    dep2 = models.ImageField(default='Silueta Insignias.png')
    dep3 = models.ImageField(default='Silueta Insignias.png')
    dep4 = models.ImageField(default='Silueta Insignias.png')
    dep5 = models.ImageField(default='Silueta Insignias.png')
    dep6 = models.ImageField(default='Silueta Insignias.png')
    dep7 = models.ImageField(default='Silueta Insignias.png')
    dep8 = models.ImageField(default='Silueta Insignias.png')
    dep9 = models.ImageField(default='Silueta Insignias.png')
    dep10 = models.ImageField(default='Silueta Insignias.png')
    dep11 = models.ImageField(default='Silueta Insignias.png')
    dep12 = models.ImageField(default='Silueta Insignias.png')
    dep13 = models.ImageField(default='Silueta Insignias.png')
    dep14 = models.ImageField(default='Silueta Insignias.png')
    dep15 = models.ImageField(default='Silueta Insignias.png')
    dep16 = models.ImageField(default='Silueta Insignias.png')
    dep17 = models.ImageField(default='Silueta Insignias.png')
    dep18 = models.ImageField(default='Silueta Insignias.png')
    dep19 = models.ImageField(default='Silueta Insignias.png')
    dep20 = models.ImageField(default='Silueta Insignias.png')
    dep21 = models.ImageField(default='Silueta Insignias.png')
    dep22 = models.ImageField(default='Silueta Insignias.png')
    dep23 = models.ImageField(default='Silueta Insignias.png')
    dep24 = models.ImageField(default='Silueta Insignias.png')
    dep25 = models.ImageField(default='Silueta Insignias.png')
    dep26 = models.ImageField(default='Silueta Insignias.png')
    dep27 = models.ImageField(default='Silueta Insignias.png')
    dep28 = models.ImageField(default='Silueta Insignias.png')
    dep29 = models.ImageField(default='Silueta Insignias.png')
    dep30 = models.ImageField(default='Silueta Insignias.png')
    dep31 = models.ImageField(default='Silueta Insignias.png')
    dep32 = models.ImageField(default='Silueta Insignias.png')
    def __str__(self):
        return f'Perfil de {self.user.username}'

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    timestamp = models.DateTimeField(default=timezone.now)
    content = models.TextField()

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f'{self.user.username}:{self.content}'