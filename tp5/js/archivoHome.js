let notif = document.querySelector('.notificaciones');
notif.hidden = true;

let user = document.querySelector('.menuUsuario');
user.hidden = true;

let vikings = document.querySelector('.vikings').addEventListener('mouseenter',mostrarContinuarVikings);
let vikingsHover = document.querySelector('.vikingsHover');

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

function mostrarContinuarVikings(){
    vikingsHover.hidden = false;
    vikingsHover.addEventListener('mouseleave', esconderHover);
}

function esconderHover(){
    vikingsHover.hidden = true;
}
