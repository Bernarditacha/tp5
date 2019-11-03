
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

