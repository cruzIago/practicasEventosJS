document.addEventListener("keydown",teclaAbajo);
document.addEventListener("keyup",teclaArriba);
document.addEventListener("keypressed",teclaPulsada);

function teclaAbajo(){
    document.getElementById("parrafo3").innerHTML="Tecla abajo";

}
function teclaArriba(){
    document.getElementById("parrafo3").innerHTML="Tecla arriba";

}
function teclaPulsada(){
    document.getElementById("parrafo3").innerHTML="Tecla pulsada";

}
