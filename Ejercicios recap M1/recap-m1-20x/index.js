'use strict'


const calcIva = (precio) => {
    const iva = precio * 0.12;
    let total = precio + iva;
    return total;
} 
let price = Number(prompt("Ingrese el precio"));
let pricefinal = calcIva(price);

alert (`El precio final es: ${pricefinal}`)