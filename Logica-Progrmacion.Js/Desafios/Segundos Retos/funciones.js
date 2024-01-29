/*
* Crear una función que muestre "¡Hola, mundo!" en la consola.*/
function saludo (){
    console.log("¡Hola, mundo!");
}
saludo();

/*
*Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/
function nom(nombre){
    console.log(`¡Hola, ${nombre}!`)
}
nom('Ana')
/*
*Crear una función que reciba un número como parámetro y devuelva el doble de ese número.*/
function num(num){
    console.log(num*2);
}
num(16)

/*
*Crear una función que reciba tres números como parámetros y devuelva su promedio.*/
function promedio(num1, num2, num3){
    let suma= (num1+num2+num3)/3;
    console.log(`${suma}`) ;
}
promedio(4,5,6);

/*
*Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
*/
function numMayor(param1, param2){
    if(param1>param2){
        console.log(`El numero mayor es ${param1}`);
    }else{
        console.log(`El numero mayor es ${param2}`);
    }

    //para tener en cuenta asi lo hizo el profe return a > b ? a : b;
    //La fórmula se puede leer así: si a es mayor que b, entonces devuelve a, sino devuelve b
}
numMayor(5,2);

/*
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */
 function numIgual(num){
    console.log(num*num);
 }
 numIgual(6);