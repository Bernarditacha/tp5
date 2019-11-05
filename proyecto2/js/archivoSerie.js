
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

//FUNCION PARA QUE DESAPAREZCA LA ESTRELLITA VACIA Y APAREZCA LA LLENA
let estrellaVacia = document.querySelector('.iconoEstrellaVacia');
estrellaVacia.hidden = false;
let estrellaRellena = document.querySelector('.iconoEstrellaRellena');
estrellaRellena.hidden = true;

function llenarEstrella(){
    estrellaVacia.hidden = true;
    estrellaRellena.hidden = false;
}