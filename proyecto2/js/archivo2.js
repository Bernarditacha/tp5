
//ESTE NO TIENE NINGUNA FUNCION ASOCIADA A UN HIDDEN 



//TENGO Q HACER LO MISMO QUE NO PUDE CON LAS NOTIFICACIOENS
//SI HAGO CLICK EN OTRO LADO QUE SE VUELVAN TODODS A LA NORMALIDAD (RECUADRO NEGRO)
let planUno = document.querySelector('.plan1');
let planDos = document.querySelector('.plan2');
let planTres = document.querySelector('.plan3');
let planCuatro = document.querySelector('.plan4');

function plan1Seleccionado(){
    planUno.className = "plan1Elegido";
}

function plan2Seleccionado(){
    planDos.className = "plan2Elegido";
}

function plan3Seleccionado(){
    planTres.className = "plan3Elegido";
}
function plan4Seleccionado(){
    planCuatro.className = "plan4Elegido";
}
