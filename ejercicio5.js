const agendaTelefonica = {
    juan: "302312324",
    mario: "321456387",
    Jose: "435356346"
}

function buscarContacto(nombre) {
    if (agendaTelefonica[nombre]) {
        return "El número de teléfono es: " + agendaTelefonica[nombre];
    } else {
        return "El contacto no se encontró.";
    }
}

console.log(buscarContacto("juan"));