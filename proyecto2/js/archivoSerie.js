
//FUNCION PARA QUE DESAPAREZCA LA ESTRELLITA VACIA Y APAREZCA LA LLENA
let estrellaVacia = document.querySelector('.iconoEstrellaVacia');
estrellaVacia.hidden = false;
let estrellaRellena = document.querySelector('.iconoEstrellaRellena');
estrellaRellena.hidden = true;

function llenarEstrella(){
    estrellaVacia.hidden = true;
    estrellaRellena.hidden = false;
}