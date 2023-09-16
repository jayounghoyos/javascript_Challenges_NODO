const factura = 100;

const porcentaje = 15;

const propina = (factura * porcentaje) / 100;

const total = factura + propina;
console.log("La propina que debes dejar es de: " + propina + " pesos");
console.log("El total a pagar es(con la propina): " + total + " pesos");