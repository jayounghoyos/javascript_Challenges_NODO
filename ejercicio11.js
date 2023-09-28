var mensajeCodificado = "El gato rojo tiene hambre";
var codificacion = {
    "gato": "agente",
    "rojo": "secreto",
    "hambre": "misión"
};
var palabras = mensajeCodificado.split(" ");
var mensajeDescodificado = "";
for (var i = 0; i < palabras.length; i++) {
    var palabra = palabras[i];
    if (codificacion[palabra]) {
        mensajeDescodificado += codificacion[palabra];
    } else {
        mensajeDescodificado += palabra;
    }
    mensajeDescodificado += " ";
}

// Eliminar el espacio adicional al final del mensaje descodificado
mensajeDescodificado = mensajeDescodificado.trim();

// Imprimir el mensaje descodificado
console.log(mensajeDescodificado);