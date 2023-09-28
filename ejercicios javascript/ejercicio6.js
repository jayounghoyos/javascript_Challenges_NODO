function valorDado() {
    return Math.floor(Math.random() * 6) + 1;
}

dado1 = valorDado();
dado2 = valorDado();

const total = dado1 + dado2;
console.log("El valor del dado 1 es: " + dado1);
console.log("El valor del dado 2 es: " + dado2);
console.log("La suma de los dos dados es: " + total);