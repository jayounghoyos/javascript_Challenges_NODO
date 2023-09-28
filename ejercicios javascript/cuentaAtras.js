function cuentaAtras(numeroInicial, segundosEntreCuentas) {
    if (
        typeof numeroInicial !== 'number' ||
        typeof segundosEntreCuentas !== 'number' ||
        numeroInicial <= 0 ||
        segundosEntreCuentas <= 0
    ) {
        console.log('Por favor, ingresa números enteros positivos válidos.');
        return;
    }

    function realizarCuentaAtras(numero) {
        if (numero < 0) {
            console.log('¡Cuenta atrás finalizada!');
            return;
        }

        console.log(numero);

        setTimeout(function() {
            realizarCuentaAtras(numero - 1);
        }, segundosEntreCuentas * 1000);
    }

    realizarCuentaAtras(numeroInicial);
}

// Ejemplo de uso: cuenta atrás desde 10 con intervalos de 1 segundo
cuentaAtras(10, 1);