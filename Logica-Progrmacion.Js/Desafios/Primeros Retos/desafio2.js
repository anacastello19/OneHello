/**
 //Pide al usuario que dia de la semana es
    let diaSemana= prompt('Dime que dia es hoy!');
    if (diaSemana=='Sabado'  || diaSemana== 'Domingo'){
        alert("¡Buen finde semana!");
    }else{
        alert("¡Buena semana!");
    }

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
num= prompt('Dime un numero');
if(num>=1){
    alert('El numero que elegiste es positivo')
}else{
    alert('el numero que elegiste es negativo')
}

//Crea un sistema de puntuación para un juego. 
//Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
//En caso contrario, muestra "Intenta nuevamente para ganar.".
let puntuación= prompt('Espero que te haya gustado nuestro juego. Dime! Que puntuacion obtuviste?');
if(puntuación >= 100) {
    alert('¡Felicidades, has ganado!');
} else {
    alert("Intenta nuevamente para ganar.")
}

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
//utilizando un template string para incluir el valor del saldo.
let saldo=250000
console.log(`Tu saldo actual es de ${saldo}.`);
*/

//Pide al usuario que ingrese su nombre mediante un prompt. 
//Luego, muestra una alerta de bienvenida usando ese nombre.

const nombre = prompt('Me recuerdas tu nombre?');
alert('Bienvenido/a ' + nombre);
