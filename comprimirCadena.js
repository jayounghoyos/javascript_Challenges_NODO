function comprimirCadena(cadena) {
    let resultado = '';
    let contador = 1;

    for (let i = 0; i < cadena.length; i++) {
        const letraActual = cadena[i];
        const letraSiguiente = cadena[i + 1];

        if (letraActual === letraSiguiente) {
            contador++;
        } else {
            resultado += letraActual + (contador > 1 ? contador : '');
            contador = 1;
        }
    }

    return resultado;
}

// Ejemplo de uso:
console.log(comprimirCadena("aaabcc")); // Devuelve "a3b1c2"
console.log(comprimirCadena("abcd")); // Devuelve "a1b1c1d1"