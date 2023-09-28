var animalFavorito = prompt("Ingresa tu animal favorito:");
var nombre = prompt("Ingresa tu nombre:");

animalFavorito = animalFavorito.charAt(0).toUpperCase() + animalFavorito.slice(1);

var nombreSuperheroe = animalFavorito + " " + nombre;
console.log("El superheroe se llama: ", nombreSuperheroe);