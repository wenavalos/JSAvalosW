
let importe = parseInt(prompt('Ingrese el importe a solicitar'))
let cuota = parseInt(prompt('Ingrese la cantidad de cuotas a abonar el prestamo'))

if (cuota >= 1 && cuota <= 6) {

    let inte = importe * 0.15
    let total = inte + importe
    let c= total/cuota

    alert('El importe SOLICITADO es: $' + importe + '\nEl importe TOTAL a abonar es: $' + total + ' en ' + cuota +' cuotas de $ '+c )

} else if (cuota >= 7 && cuota <= 9) {

    let inte = importe * 0.20
    let total = inte + importe
    let c= total/cuota

    alert('El importe SOLICITADO es: $' + importe + '\nEl importe TOTAL a abonar es: $' + total + ' en ' + cuota +' cuotas de $ '+c )


} else if (cuota >= 10 && cuota <= 12) {
    let inte = importe * 0.30
    let total = inte + importe
    let c= total/cuota

    alert('El importe SOLICITADO es: $' + importe + '\nEl importe TOTAL a abonar es: $' + total + ' en ' + cuota +' cuotas de $ '+c )


} else if (cuota >= 13 && cuota <= 18) {
    let inte = importe * 0.40
    let total = inte + importe
    let c= total/cuota

    alert('El importe SOLICITADO es: $' + importe + '\nEl importe TOTAL a abonar es: $' + total + ' en ' + cuota +' cuotas de $ '+c )


} else if (cuota > 18) {
    let inte = importe * 0.50
    let total = inte + importe
    let c= total/cuota

    alert('El importe SOLICITADO es: $' + importe + '\nEl importe TOTAL a abonar es: $' + total + ' en ' + cuota +' cuotas de $ '+c )


} else {
    alert('ERROR! No se ingresaron los datos solicitados')

} 