function esExpresionMatematica(expresion) {
    // Expresión regular para validar la estructura
    const regex = /^(\s*-?\d+(\.\d+)?\s*([\+\-\*\/%]\s*-?\d+(\.\d+)?\s*)*)$/;

    return regex.test(expresion);
}

// Ejemplos de uso:
console.log(esExpresionMatematica("5 + 6 / 7 - 4")); // true
console.log(esExpresionMatematica("5 a 6")); // false