from .models import Profile
from rest_framework import viewsets
from .serializers import ProfileSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.order_by('id')
    serializer_class = ProfileSerializer