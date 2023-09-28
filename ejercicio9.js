function cifrar(mensaje, desplazamiento) {
    let mensajeCifrado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje[i];

        if (char.match(/[a-zA-Z]/)) { //Verificamos si el cáracter es una letra del alfabeto.

            //Verificamos si es mayuscula o minúscula.
            let isUpperCase = char === char.toUpperCase();
            let alphabetStart = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let charCode = char.charCodeAt(0) - alphabetStart;
            //Esto es para el desplazamiento y luego reviso que esté en un rango valido de 0 a 25
            charCode = (charCode + desplazamiento) % 26;
            charCode = (charCode + 26) % 26;
            //Convertimos el valor numerico de la posición a un cáracter.
            char = String.fromCharCode(charCode + alphabetStart);
        }
        mensajeCifrado += char;
    }
    return mensajeCifrado;
}

const mensajeOriginal = "Soy Juan Andrés Young Hoyos";
const desplazar = 2;
const mensajeCifrado = cifrar(mensajeOriginal, desplazar);
console.log("Original:", mensajeOriginal);
console.log("Cifrado:", mensajeCifrado);