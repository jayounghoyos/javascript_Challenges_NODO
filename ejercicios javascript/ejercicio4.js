var bot = Math.floor(Math.random() * 10) + 1;
var user = 10;
var intentos = 3;

for (let i = 0; i < intentos; i++) {
    user += 1; //simulando que buscó otro número para ver si atinaba
    if (user == bot) {
        console.log("¡Felicidades adivinaste!");
        break;
    } else if (user > bot) {
        console.log("La suposición es más alta");
    } else if (user < bot) {
        console.log("La suposición es más baja");
    }
    if (user !== bot) {
        console.log("Fallaste");
    }
    console.log("------------");
    if (i == 2) {
        console.log("Has perdido, el número era: " + bot);
    }
}