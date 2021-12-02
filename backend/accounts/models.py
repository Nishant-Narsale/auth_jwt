from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **other_fields):
        if not email:
            raise ValueError('Users must have an email address')

        #normalize_email just normalize the email like 'NishNarsale510@gmail.com' to 'nishnarsale510@gmail.com'
        email = self.normalize_email(email)
        other_fields.setdefault('is_admin', False)
        user = self.model(email=email, **other_fields)

        # this set_password method just hash our password before saving it
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password=None,**other_fields):
        if not email:
            raise ValueError('Users must have an email address')

        #normalize_email just normalize the email like 'NishNarsale510@gmail.com' to 'nishnarsale510@gmail.com'
        email = self.normalize_email(email)

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff' is not True):
            raise ValueError('superuser must be assigned to is_staff=True')
        if other_fields.get('is_superuser' is not True):
            raise ValueError('superuser must be assigned to is_superuser=True')

        user = self.model(email=email, **other_fields)
        user.is_admin = True
        # this set_password method just hash our password before saving it
        user.set_password(password)
        user.save()

        return user



class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name']

    def get_full_name(self):
        return self.first_name

    def get_short_name(self):
        return self.first_name
        
    def str(self):
        return self.email
        