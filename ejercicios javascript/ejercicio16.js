// Pedir al usuario que ingrese una cadena de texto
var cadenaTexto = prompt("Ingresa una cadena de texto:");

// Función para limpiar y normalizar la cadena (quitar espacios y convertir a minúsculas)
function limpiarCadena(cadena) {
    return cadena.replace(/[\W_]/g, "").toLowerCase();
}

// Función para verificar si la cadena es un palíndromo
function esPalindromo(cadena) {
    var cadenaLimpia = limpiarCadena(cadena);
    var cadenaReversa = cadenaLimpia.split("").reverse().join("");
    return cadenaLimpia === cadenaReversa;
}

// Verificar si la cadena es un palíndromo
if (esPalindromo(cadenaTexto)) {
    console.log("La cadena de texto es un palíndromo.");
} else {
    console.log("La cadena de texto no es un palíndromo.");
}