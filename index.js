

const cliente = [
    {
        nombre: "Ezequiel San Román",
        edad: 27,
        nDeCuenta: 38919866,
        premium: false,
        exclusive: true,
        clienteCuentaSueldo: true
    },
    {
        nombre: "Cristian Gelsi",
        edad: 49,
        nDeCuenta: 12345678,
        premium: false,
        exclusive: true,
        clienteCuentaSueldo: true
    },
    {
        nombre: "Alejandra Grazan",
        edad: 50,
        nDeCuenta: 12345679,
        premium: true,
        exclusive: false,
        clienteCuentaSueldo: false
    },
    {
        nombre: "Gaston Acosta",
        edad: 29,
        nDeCuenta: 12345610,
        premium: true,
        exclusive: false,
        clienteCuentaSueldo: false
    },
]

for (let i = 0; i < cliente.length; i++) {
    console.table(cliente[i])
    console.table(`El número de cuenta del cliente ${cliente[i].nombre} es ${cliente[i].nDeCuenta}`)

    if (cliente[i].exclusive == true) {
        console.table(`${cliente[i].nombre} tiene un %40 de descuento del 20 al 22 de diciembre por promo NAVIDAD. Tope de reintegro $8.000 acumulable con promociones MODO pagando desde la app.`)
    } else{
        console.table(`${cliente[i].nombre} tiene un %20 de descuento del 20 al 22 de diciembre por promo NAVIDAD. Tope de reintegro $3.000 acumulable con promociones MODO pagando desde la app.`)
    }

    if(cliente[i].clienteCuentaSueldo == true){
        console.table(`${cliente[i].nombre} tiene bonificada la comisión de paquete de productos por ser cliente exclusive, no pagará mensualmente ningún cargo.`)
    }else{
        console.table(`${cliente[i].nombre} debe abonar los días 10 de cada mes la comisión de paquetes. La misma tiene un costo de: $ 2700 + IVA.`)

    }

    if (cliente[i].premium == true){
        console.table(`${cliente[i].nombre} debe abonar el costo de renovación anual de tarjeta. El mismo se cobra a partir del mes del vencimiento del plastico de la tarjeta. El valor es de $12.800 en 3 cuotas de $4.266,67 cada una.`)
    }else{
        console.table(`cliente${cliente[i].nombre} es Exclusive, por lo que no paga renovación anual de tarjeta`)
    }

    
}

