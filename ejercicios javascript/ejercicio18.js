// Pedir al usuario que ingrese un mensaje de texto
var mensaje = prompt("Ingresa un mensaje de texto:");

// Función para contar los caracteres en el mensaje
function contarCaracteres(mensaje) {
    return mensaje.length;
}

// Función para contar las palabras en el mensaje
function contarPalabras(mensaje) {
    var palabras = mensaje.split(" ");
    return palabras.length;
}

// Función para contar las oraciones en el mensaje
function contarOraciones(mensaje) {
    var oraciones = mensaje.split(/[.!?]/);
    // Eliminar elementos vacíos (puede haber algunos al principio o final)
    oraciones = oraciones.filter(function(oracion) {
        return oracion.trim() !== "";
    });
    return oraciones.length;
}

// Obtener los resultados
var caracteres = contarCaracteres(mensaje);
var palabras = contarPalabras(mensaje);
var oraciones = contarOraciones(mensaje);

// Mostrar los resultados
console.log("Cantidad de caracteres: " + caracteres);
console.log("Cantidad de palabras: " + palabras);
console.log("Cantidad de oraciones: " + oraciones);