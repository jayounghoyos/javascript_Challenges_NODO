// Pedir al usuario que ingrese una palabra
var palabra = prompt("Ingresa una palabra:");

// Función para detectar el idioma de una palabra
function detectarIdioma(palabra) {
    var palabraMinuscula = palabra.toLowerCase();
    var vocalesTildadas = /[áéíóú]/g; // Expresión regular para buscar vocales tildadas en español
    var resultado = palabraMinuscula.match(vocalesTildadas);

    if (resultado && resultado.length > 0) {
        return "español";
    } else {
        return "inglés";
    }
}

// Detectar el idioma de la palabra ingresada
var idioma = detectarIdioma(palabra);

// Mostrar el resultado
console.log("La palabra ingresada es probablemente en " + idioma + ".");