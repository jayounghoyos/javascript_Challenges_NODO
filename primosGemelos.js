function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero <= 3) {
        return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function encontrarNumerosPrimosGemelos(rangoMaximo) {
    const primosGemelos = [];

    for (let numero = 2; numero <= rangoMaximo - 2; numero++) {
        if (esPrimo(numero) && esPrimo(numero + 2)) {
            primosGemelos.push([numero, numero + 2]);
        }
    }

    return primosGemelos;
}

const rangoMaximo = 100; // Cambia el valor del rango máximo según tus necesidades
const primosGemelosEncontrados = encontrarNumerosPrimosGemelos(rangoMaximo);

console.log('Pares de números primos gemelos en el rango hasta ' + rangoMaximo + ':');
primosGemelosEncontrados.forEach(par => {
    console.log('(' + par[0] + ', ' + par[1] + ')');
});