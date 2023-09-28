var nombre = "Juan";
var apellido = "Andrés";

var nombreUsuario = nombre.slice(0, 3);

var apellidoUsuario = apellido.slice(0, 3);

var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var nombreCompletoUsuario = nombreUsuario + apellidoUsuario + numeroAleatorio;

console.log("Nombre de usuario generado: " + nombreCompletoUsuario);