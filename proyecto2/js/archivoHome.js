
//FUNCIONES PARA QUE APAREZCAN Y DESAPAREZCAN LOS MENUES

let notif = document.querySelector('.notificaciones');
notif.hidden = true;

let user = document.querySelector('.menuUsuario');
user.hidden = true;

let vikings = document.querySelector('.vikings');
vikings.addEventListener('mouseenter',mostrarContinuarVikings);
vikings.hidden = false;
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
    vikings.hidden = true;
    vikingsHover.hidden = false;
    vikingsHover.addEventListener('mouseleave', esconderHover);
}

function esconderHover(){
    vikingsHover.hidden = true;
    vikings.hidden = false;
}
