// Discount or Getoff

function calcularImpuestos(valorBase, impIva){
    let impuestos = (valorBase * impIva);
    let valorEnvio = 20;
    let costoTotal = (valorBase + impuestos);
    let costoMasEnvio = (valorEnvio + costoTotal);
    alert("Tus impuestos son... " + " " +  " $" + impuestos + " " +  "+ " + "envio..." +  " $" + valorEnvio);
    // alert("El costo total de tu compra es " + costoTotal);
    // return valorBase + impuestos

    if ( costoTotal > 1000 ) {
        let costoHoddy = (499 - 499 * 0.25)
        alert("Puedes llevar un hoddy con descuento del 25%, su costo seria $" + costoHoddy + " " + " y tambien te lo enviamos gratis");
        let respuesta = parseInt(prompt("¿Deseas llevar un hoddy? (1 para sí, 0 para no)"));

            if (respuesta === 1 ) {
                let costoDescuentoTotal = costoTotal + costoHoddy
                alert("Hoddy incluida en tu carrito...");
                alert("El costo total de tu compra es de ....." + " " +  "$" + costoDescuentoTotal + ". " + " Tu factura electronica fue enviada a tu email y tu envio estara llegando en 3 dias.");
                alert("Recuerda tu envio no lleva cargo. Muchas gracias por tu compra, te esperamos nuevamente!!!");
            } else {
                alert("El costo total de tu compra es de ....." + " " + "$" + costoMasEnvio + " " + "incluido envio" + ". " + " Tu factura electronica fue enviada a tu email y tu envio estara llegando en 3 dias.");
                alert("Muchas gracias por tu compra, te esperamos nuevamente!!!");
            }
    } else {
        alert("El costo total de tu compra es de ....." +  "$" + costoMasEnvio + " . " + " Tu factura electronica fue enviada a tu email y tu envio estara llegando en 3 dias.");
        alert("Muchas gracias por tu compra, te esperamos nuevamente");
    }
}

// function obtenerPrecio() {
//     let valorOutfit = parseFloat(prompt("Ingresa el precio de tu producto"));
//     if (isNaN(valorOutfit)) {
//         alert("Por favor, ingresa un número válido.");
//         obtenerPrecio(); // LLamada recursiva
//     } else {
//         calcularImpuestos(valorOutfit, 0.19);
//     }
// }

// obtenerPrecio();

function obtenerPrecio() {
    let valorOutfit;
    do {
        valorOutfit = parseFloat(prompt("Ingresa el precio de tu producto"));
    } while (isNaN(valorOutfit));
    calcularImpuestos(valorOutfit, 0.19);
}

obtenerPrecio();
