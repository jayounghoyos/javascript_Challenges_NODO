function validarTarjetaCredito(numeroTarjeta) {
    //lo convierte en una cadena de texto, luego lo divide por caracter y luego los caracteres a números
    const digitos = numeroTarjeta.toString().split('').map(Number);
    let suma = 0;
    let duplicar = false;

    for (let i = digitos.length - 1; i >= 0; i--) { //bucle para recorrer los digitos.
        let digito = digitos[i];
        //Se aplica algoritmo de Luhn, se duplica o no y si es mayor a 9 le resta 9
        //permitiendo que solo sea un digito
        digito = duplicar ? (digito * 2 > 9 ? digito * 2 - 9 : digito * 2) : digito;
        suma += digito; //se suma el digito duplicado o no.
        duplicar = !duplicar; //cambia el valor booleano de duplicar
    }
    return suma % 10 === 0; //verifica si la suma total es divisivle por 10
}