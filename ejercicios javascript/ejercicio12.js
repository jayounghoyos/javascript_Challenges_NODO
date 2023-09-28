var frase = prompt("Ingresa una frase:");

var palabras = frase.split(" ");

function invertirPalabra(palabra) {
    var palabraInvertida = "";
    for (var i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    return palabraInvertida;
}

var palabrasInvertidas = [];
for (var i = 0; i < palabras.length; i++) {
    var palabraInvertida = invertirPalabra(palabras[i]);
    palabrasInvertidas.push(palabraInvertida);
}

var fraseInvertida = palabrasInvertidas.join(" ");

console.log("Frase invertida:", fraseInvertida);