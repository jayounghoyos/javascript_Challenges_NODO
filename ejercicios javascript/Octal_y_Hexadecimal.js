function decimalAOctal(numero) {
    if (numero === 0) {
        return '0'; // Caso especial: el octal de 0 es 0
    }

    let resultado = '';
    while (numero > 0) {
        const residuo = numero % 8;
        resultado = residuo.toString() + resultado;
        numero = Math.floor(numero / 8);
    }

    return resultado;
}

function decimalAHexadecimal(numero) {
    if (numero === 0) {
        return '0'; // Caso especial: el hexadecimal de 0 es 0
    }

    const digitosHexadecimales = '0123456789ABCDEF';
    let resultado = '';

    while (numero > 0) {
        const residuo = numero % 16;
        resultado = digitosHexadecimales[residuo] + resultado;
        numero = Math.floor(numero / 16);
    }

    return resultado;
}

// Ejemplos de uso
const numeroDecimal = 255;
const octal = decimalAOctal(numeroDecimal);
const hexadecimal = decimalAHexadecimal(numeroDecimal);

console.log(`Decimal: ${numeroDecimal}`);
console.log(`Octal: ${octal}`);
console.log(`Hexadecimal: ${hexadecimal}`);