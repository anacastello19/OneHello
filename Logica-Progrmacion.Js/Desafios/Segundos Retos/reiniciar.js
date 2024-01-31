/*
* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir 
*de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/
function calculoIMC(m, peso){
    let imc= peso /((m)*(m));
    console.log(imc);
}
calculoIMC(1.63, 63);

/*
*Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/
//Copidado del profesor
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

/*
*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
*(moneda brasileña, si deseas puedes hacerlo con el valor del dólar en tu país). 
*Para esto, considera la cotización del dólar igual a R$4,80.*/
 function convertidorDollar(dolares){
    const real = 4.80;
    console.log((dolares*real));

 }
 convertidorDollar(60);

 /*
*Crea una función que muestre en pantalla el área y el perímetro de un rectangulo, 
*utilizando la altura y la anchura que se proporcionarán como parámetros.*/ 

function rectangulo(altura, anchura){
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}
rectangulo(6,5)

/*
*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
*utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
function circulo(radio){
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}
circulo(6);

/*
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
 */
function tabla(num){
    for (var i = 1; i <= 10; i++) {
    var resultado = num * i;
    console.log(num+ " x " + i + " = " + resultado);
    }
}
tabla(1);