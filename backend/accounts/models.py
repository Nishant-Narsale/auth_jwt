from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        #normalize_email just normalize the email like 'NishNarsale510@gmail.com' to 'nishnarsale510@gmail.com'
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        # this set_password method just hash our password before saving it
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        #normalize_email just normalize the email like 'NishNarsale510@gmail.com' to 'nishnarsale510@gmail.com'
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        # this set_password method just hash our password before saving it
        user.set_password(password)
        user.save()

        return user



class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'name'
    ]

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name
        
    def str(self):
        return self.email
        