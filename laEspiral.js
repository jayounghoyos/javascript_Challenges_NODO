function dibujarEspiral(lado) {
    if (lado < 1) {
        console.log('El tamaño del lado debe ser un entero positivo.');
        return;
    }

    const simboloHorizontal = '═';
    const simboloVertical = '║';
    const simboloEsquinaSuperiorDerecha = '╗';
    const simboloEsquinaSuperiorIzquierda = '╔';
    const simboloEsquinaInferiorDerecha = '╝';
    const simboloEsquinaInferiorIzquierda = '╚';

    const matriz = [];

    // Inicializar la matriz con espacios en blanco
    for (let i = 0; i < lado; i++) {
        matriz[i] = [];
        for (let j = 0; j < lado; j++) {
            matriz[i][j] = ' ';
        }
    }

    let filaInicio = 0;
    let filaFin = lado - 1;
    let columnaInicio = 0;
    let columnaFin = lado - 1;
    let simboloActual = simboloHorizontal;

    while (filaInicio <= filaFin && columnaInicio <= columnaFin) {
        // Dibujar la parte superior de la espiral
        for (let i = columnaInicio; i <= columnaFin; i++) {
            matriz[filaInicio][i] = simboloActual;
        }
        filaInicio++;
        simboloActual = simboloVertical;

        // Dibujar el lado derecho de la espiral
        for (let i = filaInicio; i <= filaFin; i++) {
            matriz[i][columnaFin] = simboloActual;
        }
        columnaFin--;
        simboloActual = simboloHorizontal;

        // Dibujar la parte inferior de la espiral
        for (let i = columnaFin; i >= columnaInicio; i--) {
            matriz[filaFin][i] = simboloActual;
        }
        filaFin--;
        simboloActual = simboloVertical;

        // Dibujar el lado izquierdo de la espiral
        for (let i = filaFin; i >= filaInicio; i--) {
            matriz[i][columnaInicio] = simboloActual;
        }
        columnaInicio++;
        simboloActual = simboloHorizontal;
    }

    // Rellenar las esquinas
    matriz[0][0] = simboloEsquinaSuperiorIzquierda;
    matriz[0][lado - 1] = simboloEsquinaSuperiorDerecha;
    matriz[lado - 1][0] = simboloEsquinaInferiorIzquierda;
    matriz[lado - 1][lado - 1] = simboloEsquinaInferiorDerecha;

    // Dibujar la matriz resultante
    for (let i = 0; i < lado; i++) {
        console.log(matriz[i].join(''));
    }
}

// Tamaño del lado de la espiral (ajusta el valor según el tamaño deseado)
const ladoEspiral = 5;
dibujarEspiral(ladoEspiral);