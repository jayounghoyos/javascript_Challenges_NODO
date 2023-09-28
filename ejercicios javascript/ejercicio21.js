for (var i = 1; i <= 100; i++) {
    var resultado = "";
    // Verificar si es múltiplo de 3 y/o de 5
    if (i % 3 === 0) {
        resultado += "Fizz";
    }
    if (i % 5 === 0) {
        resultado += "Buzz";
    }

    // Si no es múltiplo de 3 ni de 5, mostrar el número
    if (resultado === "") {
        resultado = i;
    }
    console.log(resultado);
}