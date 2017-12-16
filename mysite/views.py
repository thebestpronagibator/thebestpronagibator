from django.contrib import messages, auth
from django.contrib.auth.models import User
from django.shortcuts import render, redirect, render_to_response
from django.template.context_processors import csrf
from django.urls import reverse
from django.views.generic import TemplateView
from django.views.generic.edit import FormView
from django.contrib.auth.forms import UserCreationForm

from mysite.models import player


class ProfilePage(TemplateView):
    template_name = "registration/profile.html"
    def dispatch(self, request, *args, **kwargs):
        context = {
            "players": player.objects.all()
        }
        return render(request, self.template_name, context)

class HomeView(TemplateView):
    template_name = "home.html"

class IndexView(TemplateView):
     template_name = "index.html"

class RegisterView(TemplateView):
    template_name = "registration/registration.html"

    def dispatch(self, request, *args, **kwargs):
        if request.method == 'POST':
            username = request.POST.get('username')
            email = request.POST.get('email')
            password = request.POST.get('password')
            password2 = request.POST.get('password2')

            if password == password2:
                User.objects.create_user(username, email, password)
                return redirect(reverse("login"))

        return render(request, self.template_name)

class StartGame(TemplateView):
    template_name = "index.html"

class ViewProfiles(TemplateView):
    template_name = "viewprofiles.html"