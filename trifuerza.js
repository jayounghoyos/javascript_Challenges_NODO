function dibujarTriangulo(n) {
    if (n < 1) {
        console.log('El número de niveles debe ser un entero positivo.');
        return;
    }

    const espacio = ' ';
    const asterisco = '*';

    for (let i = 1; i <= n; i++) {
        let fila = '';

        // Dibujar espacios antes de los asteriscos
        fila += espacio.repeat(n - i);

        // Dibujar asteriscos en la fila
        fila += asterisco.repeat(i * 2 - 1);

        console.log(fila);
    }
}

// Tamaño del triángulo (ajusta el número de niveles según el tamaño deseado)
const numeroNiveles = 5;
dibujarTriangulo(numeroNiveles);