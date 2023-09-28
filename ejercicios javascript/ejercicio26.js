// Función para determinar el ganador de una partida
function determinarGanador(jugador1, jugador2) {
    if (jugador1 === jugador2) {
        return "Tie"; // Empate
    }

    if (
        (jugador1 === "Piedra" && (jugador2 === "Tijera" || jugador2 === "Lagarto")) ||
        (jugador1 === "Tijera" && (jugador2 === "Papel" || jugador2 === "Lagarto")) ||
        (jugador1 === "Papel" && (jugador2 === "Piedra" || jugador2 === "Spock")) ||
        (jugador1 === "Lagarto" && (jugador2 === "Spock" || jugador2 === "Papel")) ||
        (jugador1 === "Spock" && (jugador2 === "Tijera" || jugador2 === "Piedra"))
    ) {
        return "Player 1";
    } else {
        return "Player 2";
    }
}

// Función para determinar el ganador de varias partidas
function determinarGanadorTotal(partidas) {
    let jugador1 = 0;
    let jugador2 = 0;

    for (const partida of partidas) {
        const resultado = determinarGanador(partida[0], partida[1]);

        if (resultado === "Player 1") {
            jugador1++;
        } else if (resultado === "Player 2") {
            jugador2++;
        }
    }

    if (jugador1 > jugador2) {
        return "Player 1";
    } else if (jugador2 > jugador1) {
        return "Player 2";
    } else {
        return "Tie";
    }
}

// Ejemplo de entrada
const partidas = [
    ["Piedra", "Tijera"],
    ["Papel", "Lagarto"],
    ["Spock", "Piedra"]
];

// Calcular el ganador total
const ganadorTotal = determinarGanadorTotal(partidas);
console.log(`El ganador total es: ${ganadorTotal}`);