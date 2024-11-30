/*'use strict'
function sumarTresNumeros(a, b, c) {
    return a + b + c;
}

let result = sumarTresNumeros(5, 10, 15);

alert(`La suma de los números es: ${result}`);*/


function sumarTresNumeros() {
    let a = Number(prompt("Ingrese el primer numero"))
    let b = Number(prompt("Ingrese el segundo numero"))
    let c = Number(prompt("Ingrese el tercer numero"))
    return a + b + c;
} 

let result = sumarTresNumeros ();
alert(`La suma de los numero es: ${result}`);


