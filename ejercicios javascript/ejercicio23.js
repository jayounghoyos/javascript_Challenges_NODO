// Función para determinar la puntuación a partir de la secuencia de puntos
function determinarPuntuacion(puntosP1, puntosP2) {
  const puntuaciones = ["Love", "15", "30", "40"];
  
  if (puntosP1 >= 3 && puntosP2 >= 3) {
    if (puntosP1 === puntosP2) {
      return "Deuce";
    } else if (Math.abs(puntosP1 - puntosP2) === 1) {
      return "Ventaja";
    } else if (puntosP1 > puntosP2) {
      return "Ventaja P1";
    } else {
      return "Ventaja P2";
    }
  } else {
    return puntuaciones[puntosP1] + " - " + puntuaciones[puntosP2];
  }
}

// Función para determinar quién ha ganado el juego
function determinarGanador(puntosP1, puntosP2) {
  if (puntosP1 >= 4 && puntosP1 - puntosP2 >= 2) {
    return "P1";
  } else if (puntosP2 >= 4 && puntosP2 - puntosP1 >= 2) {
    return "P2";
  } else {
    return null;
  }
}

// Secuencia de puntos del juego (cambiar según sea necesario)
const secuenciaDePuntos = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];

// Inicializar puntuaciones
let puntosP1 = 0;
let puntosP2 = 0;

// Simular el juego y mostrar los resultados
for (let i = 0; i < secuenciaDePuntos.length; i++) {
  if (secuenciaDePuntos[i] === "P1") {
    puntosP1++;
  } else if (secuenciaDePuntos[i] === "P2") {
    puntosP2++;
  }

  const puntuacionActual = determinarPuntuacion(puntosP1, puntosP2);
  console.log(puntuacionActual);

  const ganador = determinarGanador(puntosP1, puntosP2);
  if (ganador) {
    console.log("Ha ganado el " + ganador);
    break;
  }
}
