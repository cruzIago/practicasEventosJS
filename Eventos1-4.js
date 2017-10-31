document.addEventListener("keydown", manejaTecla,false);
document.addEventListener("keyup", manejaTecla,false);
document.addEventListener("keypress", manejaTecla,false);

function manejaTecla(event) {
    document.getElementById("parrafo3").innerHTML="Tecla pulsada: "+event.key+
        "<br>Código de la tecla pulsada: "+event.keyCode+
        "<br>Código ASCII de la tecla: "+event.charCode+
        "<br>Tecla CTRL: "+event.ctrlKey+
        "<br>Tecla ALT: "+event.altKey+//La tecla alt es una tecla de accion unica (invoca el menu en los navegadores) y no es posible sobreescribirla
        "<br>Tecla SHIFT: "+event.shiftKey;
}