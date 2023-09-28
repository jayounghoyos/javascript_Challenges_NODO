// Pedir al usuario que ingrese un mensaje
var mensaje = prompt("Ingresa un mensaje:");

// Función para encriptar un solo carácter
function encriptarCaracter(caracter) {
    if (/^[a-zA-Z]+$/.test(caracter)) {
        var codigo = caracter.charCodeAt(0);
        var esMayuscula = caracter === caracter.toUpperCase();
        var inicioCodigo = esMayuscula ? 65 : 97; // Código ASCII de 'A' o 'a'
        var desplazamiento = 1; // Desplazamiento para encriptar (1 letra siguiente)
        var codigoEncriptado = ((codigo - inicioCodigo + desplazamiento) % 26) + inicioCodigo;
        return String.fromCharCode(codigoEncriptado);
    } else {
        return caracter; // Mantener caracteres que no son letras
    }
}

// Función para encriptar un mensaje completo
function encriptarMensaje(mensaje) {
    var mensajeEncriptado = "";
    for (var i = 0; i < mensaje.length; i++) {
        mensajeEncriptado += encriptarCaracter(mensaje[i]);
    }
    return mensajeEncriptado;
}

// Encriptar el mensaje ingresado
var mensajeEncriptado = encriptarMensaje(mensaje);

// Mostrar el mensaje encriptado
console.log("Mensaje encriptado: " + mensajeEncriptado);