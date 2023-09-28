function cruzarMatrices(matrizA, matrizB) {
    const filas = matrizA.length;
    const columnas = matrizA[0].length;
    const matrizResultado = [];

    for (let i = 0; i < filas; i++) {
        matrizResultado[i] = [];
        for (let j = 0; j < columnas; j++) {
            if (matrizA[i][j] % 2 === 1 && matrizB[i][j] % 2 === 0) {
                matrizResultado[i][j] = 'X';
            } else if (matrizA[i][j] % 2 === 0 && matrizB[i][j] % 2 === 0) {
                matrizResultado[i][j] = 'O';
            } else {
                matrizResultado[i][j] = '-';
            }
        }
    }

    return matrizResultado;
}

// Ejemplo de uso:
const matrizA = [
    [1, 2],
    [3, 4]
];
const matrizB = [
    [2, 3],
    [4, 5]
];
const resultado = cruzarMatrices(matrizA, matrizB);

// Mostrar el resultado en formato de matriz
for (let i = 0; i < resultado.length; i++) {
    console.log(resultado[i].join(' '));
}