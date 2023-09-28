function buscarSecuencias(lista, objetivo) {
    const secuencias = [];
    const longitud = lista.length;

    for (let inicio = 0; inicio < longitud; inicio++) {
        for (let fin = inicio; fin < longitud; fin++) {
            const secuenciaActual = lista.slice(inicio, fin + 1); // Obtener la secuencia actual
            const suma = secuenciaActual.reduce((a, b) => a + b, 0); // Calcular la suma de la secuencia

            if (suma === objetivo) {
                secuencias.push(secuenciaActual); // Agregar la secuencia al resultado
            }
        }
    }

    return secuencias;
}

// Ejemplo de uso:
console.log(buscarSecuencias([1, 2, 3, 4, 5], 9)); // [[2, 3, 4], [4, 5]]
console.log(buscarSecuencias([1, 2, 3, 4, 5], 1)); // [[1]]
console.log(buscarSecuencias([1, 2, 3, 4, 5], 15)); // [[1, 2, 3, 4, 5]]