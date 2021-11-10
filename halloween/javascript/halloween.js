/*functions to use inside halloween exercise*/

/* una function es un modulo que describe un algoritmo simple */
/* suele tener parametros en este caso imagen 
un parametro es una variable sobre la que acuta el modulo
por otra parte javascrip es orientado a objetos y 
el objeto principal es document la pagina*/

function mostrar(imagen) {
    document.getElementById(imagen).style.visibility="visible";

}
function sonar(sonido) {
    document.getElementById(sonido).play();

}

function parar(sonido) {
    document.getElementById(sonido).pause();

}

function ocultar(imagen) {
    document.getElementById(imagen).style.visibility="hidden";
}