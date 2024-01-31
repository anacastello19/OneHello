/*
*Crea una lista vacía llamada "listaGenerica".*/
let listaGenerica=[];

/*
*Crea una lista de lenguajes de programación llamada 
*"lenguagesDeProgramacion con los siguientes elementos: 
*'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/
let lenguagesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

/*
*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
*'Java', 'Ruby' y 'GoLang'.*/
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion);

/*
*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/
function list (){
    return lenguagesDeProgramacion;
}

console.log(list());

//Funcion presentada por el profesor
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();
/*
*Dato de color

* En realidad, estas dos funciones no hacen exactamente lo mismo.

La función list devuelve la lista completa de lenguagesDeProgramacion como un solo objeto o arreglo. Cuando usas console.log(list()), imprimes todo el arreglo de lenguagesDeProgramacion a la vez.

Por otro lado, la función mostrarLenguagesSeparadamente recorre el arreglo lenguagesDeProgramacion y utiliza console.log para imprimir cada lenguaje de programación individualmente. Esto significa que cada lenguaje de programación se imprime en una nueva línea.

Entonces, aunque ambas funciones trabajan con el mismo conjunto de datos (lenguagesDeProgramacion), la forma en que presentan estos datos es diferente.
 */



/*
*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.*/
//Lista en reverse
lenguagesDeProgramacion.reverse();
console.log(lenguagesDeProgramacion);


/*
*Crea una función que calcule el promedio de los elementos en una lista de números.*/
let listNum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 2];
let suma= listNum.reduce((acumulador, valor) => acumulador + valor);
console.log(suma);

function num(){
    let promedio = suma / listNum.length;
    return promedio;
}

console.log(num());


/*
*Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/

function maxMin(){
    let max= Math.max(...listNum);
    console.log(max);
    
    let min = Math.min(...listNum);
    console.log(min);
}

maxMin();


/*
*Crea una función que devuelva la suma de todos los elementos en una lista.*/
function sum(){
    let sumaList= listNum.reduce((acumulador, valor) => acumulador + valor);
    console.log(sumaList)
}

sum();

/*
*Crea una función que devuelva la posición en la lista donde se encuentra 
*un elemento pasado como parámetro, o -1 si no existe en la lista.*/
function element(){
    let numP= listNum.indexOf(40);
    console.log(numP);
}
element();

/*
*Crea una función que reciba dos listas de números del mismo tamaño y 
*devuelva una nueva lista con la suma de los elementos uno a uno.*/
let listaNum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 2];



/*
*Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */

let cuadrados = listNum.map(function(listNum) {
    return Math.pow(listNum, 2);
});
console.log(cuadrados); 
