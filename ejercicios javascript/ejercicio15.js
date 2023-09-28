var cadenaTexto = prompt("Ingresa una cadena de texto:");

cadenaTexto = cadenaTexto.toLowerCase();

var contadorVocales = 0;
var contadorConsonantes = 0;

function esVocal(caracter) {
    return "aeiou".indexOf(caracter) !== -1;
}

for (var i = 0; i < cadenaTexto.length; i++) {
    var caracter = cadenaTexto[i];
    if (/[a-z]/.test(caracter)) {
        if (esVocal(caracter)) {
            contadorVocales++;
        } else {
            contadorConsonantes++;
        }
    }
}

console.log("Número de vocales: " + contadorVocales);
console.log("Número de consonantes: " + contadorConsonantes);