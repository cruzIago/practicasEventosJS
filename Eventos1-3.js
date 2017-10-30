document.addEventListener("keydown", manejaTecla);
document.addEventListener("keyup", manejaTecla);
document.addEventListener("keypress", manejaTecla);


var teclaAbajo = 0;
var teclaArriba = 0;
var teclaPulsada = 0;


function manejaTecla(event) {
    if (event.type == "keydown") {
        teclaAbajo += 1;
        document.getElementById("parrafo3").innerHTML = "Evento abajo " + teclaAbajo + " Evento Arriba " + teclaArriba + " Evento pulsado " + teclaPulsada;
    } else if (event.type == "keyup") {
        teclaArriba += 1;
        document.getElementById("parrafo3").innerHTML = "Evento abajo " + teclaAbajo + " Evento Arriba " + teclaArriba + " Evento pulsado " + teclaPulsada;
    } else if (event.type == "keypress") {
        teclaPulsada += 1;
        document.getElementById("parrafo3").innerHTML = "Evento abajo " + teclaAbajo + " Evento Arriba " + teclaArriba + " Evento pulsado " + teclaPulsada;

    }
}