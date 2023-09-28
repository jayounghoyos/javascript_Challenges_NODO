var contraseña = prompt("Ingresa tu contraseña:");

var cumpleLongitud = contraseña.length >= 8;
var cumpleMayuscula = /[A-Z]/.test(contraseña);
var cumpleMinuscula = /[a-z]/.test(contraseña);
var cumpleNumero = /[0-9]/.test(contraseña);

var mensajeError = "";

if (!cumpleLongitud) {
    mensajeError += "La contraseña debe tener al menos 8 caracteres.\n";
}

if (!cumpleMayuscula) {
    mensajeError += "La contraseña debe contener al menos una letra mayúscula.\n";
}

if (!cumpleMinuscula) {
    mensajeError += "La contraseña debe contener al menos una letra minúscula.\n";
}

if (!cumpleNumero) {
    mensajeError += "La contraseña debe contener al menos un número.\n";
}

if (mensajeError === "") {
    console.log("Contraseña válida");
} else {
    console.log("La contraseña no cumple con los siguientes requisitos:\n" + mensajeError);
}