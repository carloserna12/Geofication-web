from ast import For
from django.shortcuts import render, redirect
from .models import *
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import UserRegisterForm
from django.contrib.auth.models import User

def feed(request):
    #posts = Post.objects.all()
    posts = Profile.objects.all()
    print(posts)
    context = {'posts':posts}
    print(context)
    return render(request, 'social/feed.html', context)

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            messages.success(request, f'Usuario{username} creado')
            return redirect('feed')
    else:
        form = UserRegisterForm()
    context = {'form':form}
    return render(request, 'social/register.html', context)

def profile(request, username=None):

    current_user = request.user
    query = Profile.objects.get(user=request.user)
    
    if username and username != current_user.username:
        user = User.objects.get(username=username)
        posts = Profile.objects.all()
        return render(request, 'social/profile.html', {'user':user, 'posts':posts,'saldo':"privado"})
    else:
        posts = Profile.objects.all()
        user = current_user
        saldo = query.saldo
        return render(request, 'social/profile.html', {'user':user, 'posts':posts,'saldo':str(saldo)})

def game(request):
    current_user = request.user
    user = current_user
    posts = Profile.objects.all()
    query = Profile.objects.get(user=request.user)
    saldo = query.saldo
    context = {'user':user, 'posts':posts,'saldo':str(saldo)}
    return render(request, 'social/game.html', context)

def finalView(request,saldo,saldo2):
    perfilMio = Profile.objects.get(user=request.user)
    perfilMio.saldo = saldo
    perfilMio.save()
    saldo = perfilMio.saldo
    print(saldo2)
    
    listaPremios = [saldo2]
    for i in range(saldo2+1):
        if i == 1:
            if perfilMio.dep1 != "Silueta Insignias.png":
                print("a muy bien")
            else:
                perfilMio.dep1 = "Amazonas.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep1)
        if i == 2:
            if perfilMio.dep2 != "Silueta Insignias.png":
                print("a muy bien")
            else:
                perfilMio.dep2 = "Antioquia.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep2)
        if i == 3:
            if perfilMio.dep3 != "Silueta Insignias.png":
                print(perfilMio.dep3)
            else:
                perfilMio.dep3 = "Arauca.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep3)
        if i == 4:
            if perfilMio.dep4 != "Silueta Insignias.png":
                print(perfilMio.dep4)
            else:
                perfilMio.dep4 = "Atlantico.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep4)
        if i == 5:
            if perfilMio.dep5 != "Silueta Insignias.png":
                print(perfilMio.dep5)
            else:
                perfilMio.dep5 = "Bolivar.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep5)
        if i == 6:
            if perfilMio.dep6 != "Silueta Insignias.png":
                print(perfilMio.dep6)
            else:
                perfilMio.dep6 = "Boyaca.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep6)
        if i == 7:
            if perfilMio.dep7 != "Silueta Insignias.png":
                print(perfilMio.dep7)
            else:
                perfilMio.dep7= "Caldas.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep7)
        if i == 8:
            if perfilMio.dep8 != "Silueta Insignias.png":
                print(perfilMio.dep8)
            else:
                perfilMio.dep8 = "Caqueta.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep8)
        if i == 9:
            if perfilMio.dep9 != "Silueta Insignias.png":
                print(perfilMio.dep9)
            else:
                perfilMio.dep9 = "Casanare.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep9)
        if i == 10:
            if perfilMio.dep10 != "Silueta Insignias.png":
                print(perfilMio.dep10)
            else:
                perfilMio.dep10 = "Cauca.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep10)
        if i == 11:
            if perfilMio.dep11 != "Silueta Insignias.png":
                print(perfilMio.dep11)
            else:
                perfilMio.dep11 = "Cesar.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep11)
        if i == 12:
            if perfilMio.dep12 != "Silueta Insignias.png":
                print(perfilMio.dep12)
            else:
                perfilMio.dep12 = "Choco.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep12)
        if i == 13:
            if perfilMio.dep13 != "Silueta Insignias.png":
                print(perfilMio.dep13)
            else:
                perfilMio.dep13 = "Cordoba.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep13)
        if i == 14:
            if perfilMio.dep14 != "Silueta Insignias.png":
                print(perfilMio.dep14)
            else:
                perfilMio.dep14 = "Cundinamarca.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep14)
        if i == 15:
            if perfilMio.dep15 != "Silueta Insignias.png":
                print(perfilMio.dep15)
            else:
                perfilMio.dep15 = "Guainia.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep15)
        if i == 16:
            if perfilMio.dep16 != "Silueta Insignias.png":
                print(perfilMio.dep16)
            else:
                perfilMio.dep16 = "Guaviare.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep16)
        if i == 17:
            if perfilMio.dep17 != "Silueta Insignias.png":
                print(perfilMio.dep17)
            else:
                perfilMio.dep17 = "Huila.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep17)
        if i == 18:
            if perfilMio.dep18 != "Silueta Insignias.png":
                print(perfilMio.dep18)
            else:
                perfilMio.dep18 = "La Guajira.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep18)
        if i == 19:
            if perfilMio.dep19 != "Silueta Insignias.png":
                print(perfilMio.dep19)
            else:
                perfilMio.dep19 = "Magdalena.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep19)
        if i == 20:
            if perfilMio.dep20 != "Silueta Insignias.png":
                print(perfilMio.dep20)
            else:
                perfilMio.dep20 = "Meta.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep20)
        if i == 21:
            if perfilMio.dep21 != "Silueta Insignias.png":
                print(perfilMio.dep21)
            else:
                perfilMio.dep21 = "Nariño.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep21)
        if i == 22:
            if perfilMio.dep22 != "Silueta Insignias.png":
                print(perfilMio.dep22)
            else:
                perfilMio.dep22 = "Norte de Santander.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep22)
        if i == 23:
            if perfilMio.dep23 != "Silueta Insignias.png":
                print(perfilMio.dep23)
            else:
                perfilMio.dep23 = "Putumayo.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep23)
        if i == 24:
            if perfilMio.dep24 != "Silueta Insignias.png":
                print(perfilMio.dep24)
            else:
                perfilMio.dep24 = "Quindio.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep24)
        if i == 25:
            if perfilMio.dep25 != "Silueta Insignias.png":
                print(perfilMio.dep25)
            else:
                perfilMio.dep25 = "Risaralda.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep25)
        if i == 26:
            if perfilMio.dep26 != "Silueta Insignias.png":
                print(perfilMio.dep26)
            else:
                perfilMio.dep26 = "San Andres y Providencia.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep26)
        if i == 27:
            if perfilMio.dep27 != "Silueta Insignias.png":
                print(perfilMio.dep27)
            else:
                perfilMio.dep27 = "Santander.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep27)
        if i == 28:
            if perfilMio.dep28 != "Silueta Insignias.png":
                print(perfilMio.dep28)
            else:
                perfilMio.dep28 = "Sucre.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep28)
        if i == 29:
            if perfilMio.dep29 != "Silueta Insignias.png":
                print(perfilMio.dep29)
            else:
                perfilMio.dep29 = "Tolima.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep29)
        if i == 30:
            if perfilMio.dep30 != "Silueta Insignias.png":
                print(perfilMio.dep30)
            else:
                perfilMio.dep30 = "Valle del Cauca.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep30)
        if i == 31:
            if perfilMio.dep31 != "Silueta Insignias.png":
                print(perfilMio.dep31)
            else:
                perfilMio.dep31 = "Vaupes.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep31)
        if i == 32:
            if perfilMio.dep32 != "Silueta Insignias.png":
                print(perfilMio.dep1)
            else:
                perfilMio.dep32 = "Vichada.png"
                perfilMio.save()

                listaPremios.append(perfilMio.dep32)
        
        
        
    

    print(listaPremios)

    context = {'saldo':str(saldo),'premios':listaPremios}
    return render(request, 'social/finalView.html', context)
