from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from . import models
from . import serializers


# Create your views here.

class UserListView(generics.ListCreateAPIView):
	queryset = models.CustomUser.objects.all()
	serializer_class = serializers.UserSerializer

# @api_view(['POST'])
# @permission_classes((AllowAny,))
# def create_user(request):
#     serialized = UserSerializer(data=request.data)
#     if serialized.is_valid():
#         serialized.save()
#         return Response(serialized.data, status=status.HTTP_201_CREATED)
#     else:
#         return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)