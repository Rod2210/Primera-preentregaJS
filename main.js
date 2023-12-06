let ingresoMensual = 0;
let gastos = [];

function agregarTransaccion() {
    const itemGasto = prompt('Ingrese el item en qué gasta su dinero:');
    const monto = parseFloat(prompt('Ingrese gasto de ese item:'));

    // Validacion de datos
    if (!isNaN(monto) && itemGasto.trim() !== '') {
        gastos.push({ itemGasto, monto });
        mostrarTransacciones();
        calcularTotalGastos();
    } else {
        alert('Ingrese datos válidos.');
    }
}

function mostrarTransacciones() {
    let listadeGastos = 'Transacciones:\n';

    for (let i = 0; i < gastos.length; i++) {
        const transaccion = gastos[i];
        listadeGastos += `${transaccion.itemGasto}: $${transaccion.monto.toFixed(2)}\n`;
    }

    alert(listadeGastos);
}

function calcularTotalGastos() {
    let total = 0;

    for (let i = 0; i < gastos.length; i++) {
        total += gastos[i].monto;
    }

    const montoFinal = ingresoMensual - total;
    alert(`Total de Gastos: $${total.toFixed(2)}\nMonto final mensual despues de gastos: $${montoFinal.toFixed(2)}`);
}

function obtenerIngresoMensual() {
    ingresoMensual = parseFloat(prompt('Ingrese su ingreso mensual:') || 0);

    // Preguntar el nro de items en que se realizan los gastos (ej: si gasto en comida y universidad
    // el numero de items serian 2)
    const numGastos = parseInt(prompt('Ingrese el número de items en los que gasta su dinero:'));

    if (!isNaN(numGastos) && numGastos > 0) {
        // Solicitar información para cada gasto
        for (let i = 0; i < numGastos; i++) {
            agregarTransaccion();
        }
    } else {
        alert('Ingrese un número válido de items.');
    }

    //  mostrar el monto final que le queda al usuario despues de sus gastos
    calcularTotalGastos();
}


obtenerIngresoMensual();


