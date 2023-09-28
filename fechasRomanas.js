function numeroARomano(num) {
    const valoresRomanos = [
        { valor: 1000, romano: 'M' },
        { valor: 900, romano: 'CM' },
        { valor: 500, romano: 'D' },
        { valor: 400, romano: 'CD' },
        { valor: 100, romano: 'C' },
        { valor: 90, romano: 'XC' },
        { valor: 50, romano: 'L' },
        { valor: 40, romano: 'XL' },
        { valor: 10, romano: 'X' },
        { valor: 9, romano: 'IX' },
        { valor: 5, romano: 'V' },
        { valor: 4, romano: 'IV' },
        { valor: 1, romano: 'I' }
    ];

    let resultado = '';
    for (let i = 0; i < valoresRomanos.length; i++) {
        while (num >= valoresRomanos[i].valor) {
            resultado += valoresRomanos[i].romano;
            num -= valoresRomanos[i].valor;
        }
    }
    return resultado;
}

function fechaRomana(fecha) {
    const partes = fecha.split('-');
    const dia = numeroARomano(parseInt(partes[0]));
    const mes = numeroARomano(parseInt(partes[1]));
    const anno = numeroARomano(parseInt(partes[2]));
    return `${dia}-${mes}-${anno}`;
}

// Ejemplos de uso:
console.log(fechaRomana("01-01-2021")); // "I-I-MMXXI"
console.log(fechaRomana("15-05-1998")); // "XV-V-MCMXCVIII"