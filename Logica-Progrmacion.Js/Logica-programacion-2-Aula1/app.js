//Con el document.querySelector llamamos a una etiqueta
//y con el nombre de la etiquera mas .innerHTML le atribuimos un valor
//Función
function asignarTextElement(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
//Función es un encapsilamiento de una acción
//En este momento es validar el valor del usario
function intentoDeUsuario() {
    alert('Click desde el boton');

}

asignarTextElement('h1', 'Juego del numero secrete!');
asignarTextElement('p','Indica un numero del 1 al 10');