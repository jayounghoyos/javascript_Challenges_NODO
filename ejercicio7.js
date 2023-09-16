const correo = "juanandresyounghoyos@gmail.com";


var arroba = false;
var punto = false;

for (let i = 0; i < correo.length; i++) {
    if (correo[i] == "@") {
        arroba = true;
    } else if (correo[i] == ".") {
        punto = true;
    }
}

if (correo && punto) {
    console.log("Es válida");
} else {
    console.log("No es válida");
}