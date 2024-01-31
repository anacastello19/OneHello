let numeroSecreto;
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos===1}? 'vez' : 'veces'`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        if(numeroDeUsuario>numeroDeUsuario){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario').value='';
    //valorCaja.values='';
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializaar el numero intento
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute("disabled", "true");
}

