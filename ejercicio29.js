// Función para verificar si una cadena es un heterograma
function esHeterograma(cadena) {
    // Convertir la cadena a minúsculas para hacer la comparación sin distinción de mayúsculas y minúsculas
    cadena = cadena.toLowerCase();

    // Crear un objeto para almacenar las letras únicas
    const letrasUnicas = {};

    // Recorrer la cadena y verificar si cada letra es única
    for (let letra of cadena) {
        if (letra.match(/[a-z]/) && letrasUnicas[letra]) {
            return false; // Si se encuentra una letra repetida, no es un heterograma
        }
        letrasUnicas[letra] = true;
    }

    return true; // Si no se encontraron letras repetidas, es un heterograma
}

// Función para verificar si una cadena es un isograma
function esIsograma(cadena) {
    // Convertir la cadena a minúsculas para hacer la comparación sin distinción de mayúsculas y minúsculas
    cadena = cadena.toLowerCase();

    // Crear un objeto para almacenar las letras y contar cuántas veces aparece cada una
    const contadorLetras = {};

    // Recorrer la cadena y verificar si alguna letra se repite más de una vez
    for (let letra of cadena) {
        if (letra.match(/[a-z]/)) {
            if (contadorLetras[letra]) {
                return false; // Si se encuentra una letra repetida, no es un isograma
            }
            contadorLetras[letra] = true;
        }
    }

    return true; // Si no se encontraron letras repetidas, es un isograma
}

// Función para verificar si una cadena es un pangrama
function esPangrama(cadena) {
    // Convertir la cadena a minúsculas para hacer la comparación sin distinción de mayúsculas y minúsculas
    cadena = cadena.toLowerCase();

    // Crear un objeto para almacenar las letras del alfabeto inglés
    const letrasAlfabeto = {};

    // Llenar el objeto con todas las letras del alfabeto
    for (let i = 97; i <= 122; i++) {
        letrasAlfabeto[String.fromCharCode(i)] = true;
    }

    // Recorrer la cadena y marcar las letras del alfabeto encontradas
    for (let letra of cadena) {
        if (letrasAlfabeto[letra]) {
            delete letrasAlfabeto[letra];
        }
    }

    // Si el objeto está vacío, todas las letras del alfabeto fueron encontradas
    return Object.keys(letrasAlfabeto).length === 0;
}

// Ejemplos de uso
console.log(esHeterograma("murcielago")); // true (es un heterograma)
console.log(esIsograma("reconocer")); // false (no es un isograma)
console.log(esPangrama("El rápido zorro marrón salta sobre el perro perezoso")); // true (es un pangrama)