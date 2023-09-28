function analizarTexto(texto) {
    let palabraActual = '';
    let longitudTotalPalabras = 0;
    let numeroPalabras = 0;
    let numeroOraciones = 0;
    let longitudPalabraMasLarga = 0;
    let palabraMasLarga = '';

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];

        if (caracter.match(/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/)) {
            // Si el carácter es una letra o letra acentuada
            palabraActual += caracter;
        } else if (caracter === ' ' || caracter === '\n' || caracter === '\t' || caracter === '\r' || caracter === '.' || caracter === '!' || caracter === '?') {
            // Si el carácter es un espacio, salto de línea, tabulación, punto, exclamación o interrogación
            if (palabraActual.length > 0) {
                // Se encontró una palabra
                longitudTotalPalabras += palabraActual.length;
                numeroPalabras++;

                if (palabraActual.length > longitudPalabraMasLarga) {
                    longitudPalabraMasLarga = palabraActual.length;
                    palabraMasLarga = palabraActual;
                }

                palabraActual = '';
            }

            if (caracter === '.' || caracter === '!' || caracter === '?') {
                // Se encontró una oración
                numeroOraciones++;
            }
        }
    }

    // Verificar si hay una palabra sin espacio al final del texto
    if (palabraActual.length > 0) {
        longitudTotalPalabras += palabraActual.length;
        numeroPalabras++;

        if (palabraActual.length > longitudPalabraMasLarga) {
            longitudPalabraMasLarga = palabraActual.length;
            palabraMasLarga = palabraActual;
        }
    }

    const longitudPromedioPalabras = longitudTotalPalabras / numeroPalabras;

    return {
        numeroPalabras: numeroPalabras,
        longitudPromedioPalabras: longitudPromedioPalabras,
        numeroOraciones: numeroOraciones,
        palabraMasLarga: palabraMasLarga,
        longitudPalabraMasLarga: longitudPalabraMasLarga
    };
}

// Ejemplo de uso
const texto = "Este es un ejemplo de análisis de texto. El texto contiene varias palabras y oraciones. ¿Puedes encontrar la palabra más larga?";

const resultado = analizarTexto(texto);

console.log(`Número total de palabras: ${resultado.numeroPalabras}`);
console.log(`Longitud promedio de las palabras: ${resultado.longitudPromedioPalabras}`);
console.log(`Número de oraciones: ${resultado.numeroOraciones}`);
console.log(`Palabra más larga: ${resultado.palabraMasLarga} (Longitud: ${resultado.longitudPalabraMasLarga})`);