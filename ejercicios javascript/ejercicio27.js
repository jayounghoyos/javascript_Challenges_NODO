const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("¡Bienvenido al Sombrero Seleccionador de Hogwarts!");
console.log("Responde a las siguientes preguntas para determinar en qué casa perteneces:");

let puntajeGryffindor = 0;
let puntajeSlytherin = 0;
let puntajeHufflepuff = 0;
let puntajeRavenclaw = 0;

rl.question("1. ¿Qué cualidad valoras más?\n" +
    "a) Coraje\n" +
    "b) Astucia\n" +
    "c) Lealtad\n" +
    "d) Sabiduría\n", (respuesta1) => {
        switch (respuesta1.toLowerCase()) {
            case 'a':
                puntajeGryffindor++;
                break;
            case 'b':
                puntajeSlytherin++;
                break;
            case 'c':
                puntajeHufflepuff++;
                break;
            case 'd':
                puntajeRavenclaw++;
                break;
        }

        rl.question("2. ¿Qué tipo de animal te gustaría tener como mascota?\n" +
            "a) León\n" +
            "b) Serpiente\n" +
            "c) Tejón\n" +
            "d) Águila\n", (respuesta2) => {
                switch (respuesta2.toLowerCase()) {
                    case 'a':
                        puntajeGryffindor++;
                        break;
                    case 'b':
                        puntajeSlytherin++;
                        break;
                    case 'c':
                        puntajeHufflepuff++;
                        break;
                    case 'd':
                        puntajeRavenclaw++;
                        break;
                }

                rl.question("3. ¿Cuál es tu asignatura favorita?\n" +
                    "a) Defensa Contra las Artes Oscuras\n" +
                    "b) Pociones\n" +
                    "c) Herbología\n" +
                    "d) Astronomía\n", (respuesta3) => {
                        switch (respuesta3.toLowerCase()) {
                            case 'a':
                                puntajeGryffindor++;
                                break;
                            case 'b':
                                puntajeSlytherin++;
                                break;
                            case 'c':
                                puntajeHufflepuff++;
                                break;
                            case 'd':
                                puntajeRavenclaw++;
                                break;
                        }

                        rl.question("4. ¿Qué cualidad crees que te define mejor?\n" +
                            "a) Valentía\n" +
                            "b) Ambición\n" +
                            "c) Paciencia\n" +
                            "d) Inteligencia\n", (respuesta4) => {
                                switch (respuesta4.toLowerCase()) {
                                    case 'a':
                                        puntajeGryffindor++;
                                        break;
                                    case 'b':
                                        puntajeSlytherin++;
                                        break;
                                    case 'c':
                                        puntajeHufflepuff++;
                                        break;
                                    case 'd':
                                        puntajeRavenclaw++;
                                        break;
                                }

                                rl.question("5. ¿Qué tipo de magia te gustaría aprender más?\n" +
                                    "a) Magia de combate\n" +
                                    "b) Magia oscura\n" +
                                    "c) Magia de sanación\n" +
                                    "d) Magia elemental\n", (respuesta5) => {
                                        switch (respuesta5.toLowerCase()) {
                                            case 'a':
                                                puntajeGryffindor++;
                                                break;
                                            case 'b':
                                                puntajeSlytherin++;
                                                break;
                                            case 'c':
                                                puntajeHufflepuff++;
                                                break;
                                            case 'd':
                                                puntajeRavenclaw++;
                                                break;
                                        }

                                        // Determinar la casa basándose en los puntajes
                                        let casa = "";
                                        let puntajeMaximo = Math.max(puntajeGryffindor, puntajeSlytherin, puntajeHufflepuff, puntajeRavenclaw);

                                        if (puntajeGryffindor === puntajeMaximo) {
                                            casa = "Gryffindor";
                                        } else if (puntajeSlytherin === puntajeMaximo) {
                                            casa = "Slytherin";
                                        } else if (puntajeHufflepuff === puntajeMaximo) {
                                            casa = "Hufflepuff";
                                        } else {
                                            casa = "Ravenclaw";
                                        }

                                        console.log(`¡Felicidades! Eres parte de la casa ${casa}.`);
                                        rl.close();
                                    });
                            });
                    });
            });
    });