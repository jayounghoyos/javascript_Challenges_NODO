function evaluarRPN(expresion) {
    const stack = [];
    const elementos = expresion.split(' ');

    for (let elemento of elementos) {
        if (/\d/.test(elemento)) {
            // Si es un número, lo apilamos en la pila
            stack.push(parseInt(elemento));
        } else if (/[\+\-\*\/]/.test(elemento)) {
            // Si es un operador, desapilamos los dos últimos números y realizamos la operación
            const b = stack.pop();
            const a = stack.pop();

            if (elemento === '+') {
                stack.push(a + b);
            } else if (elemento === '-') {
                stack.push(a - b);
            } else if (elemento === '*') {
                stack.push(a * b);
            } else if (elemento === '/') {
                // Comprobamos la división por cero
                if (b === 0) {
                    return Infinity;
                }
                stack.push(Math.floor(a / b)); // Utilizamos Math.floor para obtener un resultado entero
            }
        }
    }

    // El resultado final debe estar en la cima de la pila
    return stack[0];
}

// Ejemplos de uso:
console.log(evaluarRPN("3 4 +")); // 7
console.log(evaluarRPN("5 3 4 + *")); // 35
console.log(evaluarRPN("5 1 2 + 4 * + 3 -")); // 14