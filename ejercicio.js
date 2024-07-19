// 4. precio final de compra

let compra = {
    tomate: 4,
    uva: 3,
    fresas: 5, 
    peras: 7,
    descuento: 5
}

let cuentaFinal = (compra.tomate + compra.uva + compra.fresas + compra.peras) - compra.descuento
console.log(cuentaFinal)

// 5. factura del restaurante

let factura = {
    pizza: 18,
    refresco: 3,
    papasFritas: 3
}

let facturaFinal = (factura.pizza + factura.refresco + factura.papasFritas)
console.log(facturaFinal)
factura.propina = 3
let facturaConPropina = (facturaFinal + factura.propina)
console.log(facturaConPropina)
if(facturaFinal > 20){
    factura.descuento = 5
    let facturaConDescuento = (facturaConPropina - factura.descuento)
    console.log(facturaConDescuento + ' ' + 'aplica para descuento')
}else{
    console.log('no aplica para descuento')
}

// 6. Calculadora de edad

let Vida = {
    EDAD: 12,
}
const dias = 365

let diasVividos = (Vida.EDAD * dias)
console.log(diasVividos + ' ' + 'dias vividos')