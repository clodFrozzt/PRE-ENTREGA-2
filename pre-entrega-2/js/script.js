function Monto() {
    monto = parseInt(prompt("Valor de auto que buscas (mínimo $ 50.000.- y máximo $ 500.000.-):"));
    while ((monto < 50000) || (monto > 500000)) {
        alert("Monto entre $ 50.000.- y máximo $ 500.000.");
        monto = parseInt(prompt("Valor de auto que buscas (mínimo $ 50.000.- y máximo $ 500.000.-):"));
    }
}
Monto();

function Cuotas() {
    cuotas = parseInt(prompt("Cantidad de cuotas para pagar el auto\n(mínimo 1 cuota y máximo 32 cuotas):"));
    while ((cuotas < 1) || (cuotas > 32)) {
        alert("Cantidad de cuotas mínimo 1 cuota y máximo 32 cuotas.");
        cuotas = parseInt(prompt("Cantidad de cuotas para pagar el auto\n(mínimo 1 cuota y máximo 32 cuotas):"));
    }
}
Cuotas();

function porcentajeSegunCuotas() {
    porcentajeCuotas = cuotas * 3;
    totalIntereses = parseInt(monto * cuotas / 50);
    totalPrestamo = parseInt(monto * cuotas / 50 + monto);
}
porcentajeSegunCuotas();

function montoFinal() {
    montoCuota = parseInt(totalPrestamo / cuotas);
}
montoFinal();

const autos = [
    { marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina' },
    { marca: 'Mazda', modelo: '3', combustible: 'Gasolina' },
    { marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina' },
    { marca: 'BMW', modelo: '116d', combustible: 'Diesel' },
    { marca: 'Audi', modelo: 'A4', combustible: 'Diesel' }
];

function elegirAuto() {
    let tipoCombustible = prompt("¿Qué tipo de combustible prefieres? (Gasolina/Diesel)").toLowerCase();

    let autosFiltrados = autos.filter(function (auto) {
        return auto.combustible.toLowerCase() === tipoCombustible;
    });

    if (autosFiltrados.length > 0) {
        let mensajeAutos = "Autos disponibles con " + tipoCombustible + ":\n";
        autosFiltrados.forEach(function (auto, index) {
            mensajeAutos += `${index + 1}. ${auto.marca} ${auto.modelo} (${auto.combustible})\n`;
        });

        let eleccion = parseInt(prompt(mensajeAutos + "\nElige el número del auto que deseas:")) - 1;

        if (eleccion >= 0 && eleccion < autosFiltrados.length) {
            return autosFiltrados[eleccion];
        } else {
            alert("Opción inválida. Por favor, selecciona nuevamente.");
            return elegirAuto();
        }
    } else {
        alert("No tenemos autos con ese tipo de combustible.");
        return elegirAuto();
    }
}

let autoElegido = elegirAuto();

document.getElementById('montoPrestamo').innerHTML = "Valor de auto: $" + monto;
document.getElementById('cuotasPrestamo').innerHTML = "Cuotas: " + cuotas + " cuotas";
document.getElementById('porcentajeCuotas').innerHTML = "Porcentaje de cuotas: " + porcentajeCuotas + "%";
document.getElementById('totalIntereses').innerHTML = "Intereses: $" + totalIntereses;
document.getElementById('totalPrestamo').innerHTML = "Total a pagar: $" + totalPrestamo;
document.getElementById('montoCuota').innerHTML = "Total a pagar en " + cuotas + " cuotas de $" + montoCuota;

document.getElementById('autoElegido').innerHTML = `Auto elegido: ${autoElegido.marca} ${autoElegido.modelo} (${autoElegido.combustible})`;
