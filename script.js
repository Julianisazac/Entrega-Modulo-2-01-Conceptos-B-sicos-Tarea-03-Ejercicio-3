alert("Las horas son completas, no hay fracciones");


let horaSalida = Number (prompt("Poner tu hora de salida"));
let horaEntrada = Number (prompt("Ingresa tu hora de ingreso"));

let horaParqueo = horaSalida - horaEntrada;

const precioHora = 5;

let totalPago = horaParqueo*precioHora

document.write(" Parqueaste : " + horaParqueo + "horas,");
document.write(" Pago total de: " + "$" + totalPago);





