//Con el document.querySelector llamamos a una etiqueta
//y con el nombre de la etiquera mas .innerHTML le atribuimos un valor
let titulo=document.querySelector('h1');
titulo.innerHTML='Juego del numero secreto'

let parrafo=document.querySelector('p');
parrafo.innerHTML='Indica un numero del 1 al 10'

//Función es un encapsilamiento de una acción
//En este momento es validar el valor del usario
function intentoDeUsuario() {
    alert('Click desde la función');
}