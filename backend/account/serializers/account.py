from django.contrib.auth import authenticate
from google.oauth2 import id_token
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import AuthenticationFailed

from account.models import Account
from item.serializers.owned_item import OwnedItemSerializer
from order.serializers.transaction import TransactionSerializer
from google.auth.transport import requests


class AccountSerializer(serializers.ModelSerializer):
    owned_item = OwnedItemSerializer(many=True)
    transaction = TransactionSerializer(many=True)

    class Meta:
        model = Account
        fields = ['uuid', 'type', 'username', 'email', 'last_name', 'first_name', 'balance', 'owned_item',
                  'transaction']


class SignUpSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    def validate_username(self, username):
        if Account.objects.filter(username=username).exists():
            raise serializers.ValidationError('username existed')
        return username

    def save(self, **kwargs):
        Account.objects.create_user(
            self.validated_data.get('username'),
            self.validated_data.get('email'),
            self.validated_data.get('password'),
            first_name=self.validated_data.get('first_name'),
            last_name=self.validated_data.get('last_name')
        )


class SignInSerializer(serializers.Serializer):
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)

    token = serializers.CharField(read_only=True)

    def sign_in(self):
        username = self.validated_data.get('username')
        password = self.validated_data.get('password')

        user = authenticate(request=self.context.get('request'),
                            username=username, password=password)
        if not user:
            raise AuthenticationFailed

        token, created = Token.objects.get_or_create(user=user)
        return user, token.key


class GoogleSerializer(serializers.Serializer):
    token_google = serializers.CharField(write_only=True)

    token = serializers.CharField(read_only=True)

    def sign_in_google(self):
        try:
            token_google = self.validated_data.get('token_google')
            # Specify the CLIENT_ID of the app that accesses the backend:
            idinfo = id_token.verify_oauth2_token(token_google, requests.Request(),
                                                  '485711266465-qi5n47f58r10e5s33hktjcm9fau6nd5v.apps.googleusercontent.com')
            if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                raise ValueError('Wrong issuer.')
            else:
                username = idinfo['email']
                password = 'default123'
                first_name = idinfo['given_name']
                last_name = idinfo['family_name']
                email = idinfo['email']
                if Account.objects.filter(email=email).count() == 0:
                    Account.objects.create_user(username, email, password, first_name=first_name, last_name=last_name)

                user = authenticate(request=self.context.get('request'),
                                    username=username, password=password)
                if not user:
                    raise AuthenticationFailed

                token, created = Token.objects.get_or_create(user=user)
                return user, token.key
        except ValueError as err:
            content = {'message': 'Invalid token'}
            raise serializers.ValidationError(content)
