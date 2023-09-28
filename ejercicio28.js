// Configuración del generador lineal congruente
const a = 1664525; // Multiplicador
const c = 1013904223; // Incremento
const m = Math.pow(2, 32); // Módulo (2^32)

let semilla = Date.now(); // Semilla inicial basada en el tiempo actual

// Función para generar un número pseudoaleatorio entre 0 y 100
function generarNumeroPseudoaleatorio() {
    semilla = (a * semilla + c) % m;
    return (semilla / m) * 100; // Escalamos el resultado a un valor entre 0 y 100
}

// Ejemplo de uso
for (let i = 0; i < 10; i++) {
    const numeroAleatorio = generarNumeroPseudoaleatorio();
    console.log(numeroAleatorio);
}