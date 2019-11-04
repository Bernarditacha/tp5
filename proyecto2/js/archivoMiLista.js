//MOSTRAR Y ESCONDER LINEA ARRIBA DE PELICULAS

let lineaPeli = document.querySelector('.lineaArribaPeliculas');
lineaPeli.hidden = true;

let peli = document.querySelector('.peliculas');
peli.addEventListener('mouseenter', mostrarLineaArribaPeli);
peli.addEventListener('mouseleave', esconderLinea);

function mostrarLineaArribaPeli(){
    lineaPeli.hidden = false;
}

function esconderLinea(){
    lineaPeli.hidden = true;
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
