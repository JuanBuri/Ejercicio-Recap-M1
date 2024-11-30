'use strict'
let access = confirm("¿Tiene una cuenta?");
let pass = confirm("¿Conoce la contraseña?");

if (access && pass == true) {
    alert("Acceso concedido")
} else {
    alert("Acceso denegado")
}