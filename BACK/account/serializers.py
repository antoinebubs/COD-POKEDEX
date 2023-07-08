from rest_framework import serializers
from .models import UserData


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserData
        fields = ["id", "username", "password"]

    def create(self, validated_data):
        user = UserData.objects.create(username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user