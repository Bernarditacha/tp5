//FUNCIONES PARA QUE APAREZCA Y DESAPAREZCA LA LINEA DE ARRIBA EN EL PELIS Y MI LISTA
let lineaPeli = document.querySelector('.lineaArribaPeliculas');
lineaPeli.hidden = true;

let lineaLista = document.querySelector('.lineaArribaMiLista');
lineaLista.hidden = true;

let peli = document.querySelector('.peliculas');
peli.addEventListener('mouseenter', mostrarLineaArribaPeli);
peli.addEventListener('mouseleave', esconderLinea);
let lista = document.querySelector('.miLista');
lista.addEventListener('mouseenter', mostrarLineaArribaLista);
lista.addEventListener('mouseleave', esconderLinea);


function mostrarLineaArribaPeli(){
    lineaPeli.hidden = false;
}

function mostrarLineaArribaLista(){
    lineaLista.hidden = false;
}

function esconderLinea(){
    lineaPeli.hidden = true;
    lineaLista.hidden = true;
}

//FUNCIONES PARA QUE APAREZCAN Y DESAPAREZCAN LOS MENUES

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
