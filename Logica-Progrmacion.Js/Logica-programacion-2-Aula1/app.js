let numeroSecreto = generarNumSecreto();
console.log(numeroSecreto);
//Con el document.querySelector llamamos a una etiqueta
//y con el nombre de la etiquera mas .innerHTML le atribuimos un valor
//Función
function asignarTextElement(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
//Función es un encapsilamiento de una acción
//En este momento es validar el valor del usario
function verificarIntento() {
    let numUsuario = parseInt(document.getElementById("valorUsuario").values);
    console.log(numeroSecreto);
    console.log(numUsuario);
    console.log(numUsuario === numeroSecreto) ;
    return;
}
//Vamos a retornar el numero secreto
function generarNumSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextElement('h1', 'Juego del numero secrete!');
asignarTextElement('p','Indica un numero del 1 al 10');