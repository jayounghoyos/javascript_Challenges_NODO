function esViernes13(mes, año) {
    // Crear una fecha para el 13 del mes y año proporcionados
    const fecha = new Date(`${año}-${mes}-13`);

    // Obtener el día de la semana (0: Domingo, 1: Lunes, ..., 6: Sábado)
    const diaSemana = fecha.getDay();

    // El viernes es el quinto día de la semana (0-6), por lo que si diaSemana es 5, es un viernes
    return diaSemana === 5;
}

// Ejemplos de uso
console.log(esViernes13(9, 2023)); // true (viernes 13 de septiembre de 2023)
console.log(esViernes13(12, 2024)); // false (no es viernes 13 de diciembre de 2024)