function columnaExcelANumero(columna) {
    let numero = 0;
    const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < columna.length; i++) {
        const letra = columna.charAt(i);
        const valor = base.indexOf(letra) + 1;
        numero = numero * 26 + valor;
    }

    return numero;
}

// Ejemplos de uso:
console.log(columnaExcelANumero('A')); // 1
console.log(columnaExcelANumero('Z')); // 26
console.log(columnaExcelANumero('AA')); // 27
console.log(columnaExcelANumero('CA')); // 79