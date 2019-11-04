//MOSTRAR Y ESCONDER LINEA ARRIBA DE MI LISTA

let lineaLista = document.querySelector('.lineaArribaMiLista');
lineaLista.hidden = true;

let lista = document.querySelector('.miLista');
lista.addEventListener('mouseenter', mostrarLineaArribaLista);
lista.addEventListener('mouseleave', esconderLinea);

function mostrarLineaArribaLista(){
    lineaLista.hidden = false;
}

function esconderLinea(){
    lineaLista.hidden = true;
}

//FUNCIONES PARA QUE APAREZCAN Y DESAPAREZCAN LOS MENUES

let notif = document.querySelector('.notificaciones');
notif.hidden = true;

let user = document.querySelector('.menuUsuario');
user.hidden = true;

function mostrarNotificaciones(){
    notif.hidden = false;
    notif.addEventListener('mouseleave', esconderNotificacion);
}

function esconderNotificacion(){
    notif.hidden = true;
}

function mostrarMenuUser(){
    user.hidden = false;
    user.addEventListener('mouseleave', esconderMenuUser);
}

function esconderMenuUser(){
    user.hidden = true;
}
