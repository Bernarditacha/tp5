
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
let estrellaVacia = document.querySelector('.estrella6');
estrellaVacia.hidden = false;
let estrellaRellena = document.querySelector('.estrella7');
estrellaRellena.hidden = true;

function llenarEstrella(){
    estrellaVacia.hidden = true;
    estrellaRellena.hidden = false;
}