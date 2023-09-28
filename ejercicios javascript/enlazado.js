function enlazarPalabras(palabras) {
    // Función recursiva para encontrar una secuencia válida
    function encontrarSecuencia(palabraActual, palabrasRestantes) {
        if (palabrasRestantes.length === 0) {
            // Todas las palabras se han enlazado con éxito
            return true;
        }

        for (let i = 0; i < palabrasRestantes.length; i++) {
            const siguientePalabra = palabrasRestantes[i];

            if (palabraActual.charAt(palabraActual.length - 1) === siguientePalabra.charAt(0)) {
                // La última letra de la palabra actual coincide con la primera letra de la siguiente palabra
                const nuevasPalabrasRestantes = palabrasRestantes.slice(0, i).concat(palabrasRestantes.slice(i + 1));
                if (encontrarSecuencia(siguientePalabra, nuevasPalabrasRestantes)) {
                    // Se encontró una secuencia válida
                    return true;
                }
            }
        }

        return false;
    }

    if (palabras.length === 0) {
        return false; // No hay palabras para enlazar
    }

    // Comienza la búsqueda desde la primera palabra
    return encontrarSecuencia(palabras[0], palabras.slice(1));
}

// Ejemplo de uso:
console.log(enlazarPalabras(["apple", "elephant", "tiger", "rat", "tulip"])); // true
console.log(enlazarPalabras(["apple", "banana", "cherry"])); // false