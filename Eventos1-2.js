document.addEventListener("keydown", teclaAbajo);
document.addEventListener("keyup", teclaArriba);
document.addEventListener("keypress", teclaPulsada);

var teclaAbajo=0;
var teclaArriba=0;
var teclaPulsada=0;


function teclaAbajo() {
    teclaAbajo += 1;
    document.getElementById("parrafo3").innerHTML="Evento abajo "+teclaAbajo+" Evento Arriba "+teclaArriba+" Evento pulsado "+teclaPulsada;
}

function teclaArriba() {
    teclaArriba += 1;
    document.getElementById("parrafo3").innerHTML="Evento abajo "+teclaAbajo+" Evento Arriba "+teclaArriba+" Evento pulsado "+teclaPulsada;

}

function teclaPulsada() {
    teclaPulsada += 1;
    document.getElementById("parrafo3").innerHTML="Evento abajo "+teclaAbajo+" Evento Arriba "+teclaArriba+" Evento pulsado "+teclaPulsada;
}