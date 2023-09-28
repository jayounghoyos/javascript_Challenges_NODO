// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}

// Función para verificar si un número está en la secuencia de Fibonacci
function esFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (a < numero) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return a === numero;
}

// Función para obtener la descripción del número
function obtenerDescripcion(numero) {
    let descripcion = `${numero} `;

    if (esPrimo(numero)) {
        descripcion += 'es primo, ';
    } else {
        descripcion += 'no es primo, ';
    }

    if (esFibonacci(numero)) {
        descripcion += 'es parte de la secuencia de Fibonacci, ';
    } else {
        descripcion += 'no es parte de la secuencia de Fibonacci, ';
    }

    if (numero % 2 === 0) {
        descripcion += 'es par';
    } else {
        descripcion += 'es impar';
    }

    return descripcion;
}

// Solicitar al usuario que ingrese un número
const numero = parseInt(prompt("Ingresa un número:"));

// Obtener y mostrar la descripción del número
const descripcionNumero = obtenerDescripcion(numero);
console.log(descripcionNumero);