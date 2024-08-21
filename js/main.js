// Lista de partidos con Fecha, hora, lugar y precio
const partidos = [
	{ nombre: "Deportes Melipilla vs Real San Joaquín", fecha: "Sábado 24 de agosto", hora: "12:00", lugar: "Estadio Soinca Bata", precioGeneral: 5000, precioVIP: 10000 },
	{ nombre: "Fernández Vial vs Deportes Concepción", fecha: "Domingo 25 de agosto", hora: "12:00", lugar: "Estadio Ester Roa", precioGeneral: 5500, precioVIP: 11000 },
	{ nombre: "Deportes Rengo vs Deportes Puerto Montt", fecha: "Domingo 25 de agosto", hora: "15:00", lugar: "Por confirmar", precioGeneral: 5000, precioVIP: 10000 },
	{ nombre: "Provincial Ovalle vs General Velásquez", fecha: "Lunes 26 de agosto", hora: "19:00", lugar: "Estadio Diaguita", precioGeneral: 4500, precioVIP: 9000 }
];

// Mostrar lista de partidos
function mostrarPartidos() {
	let lista = "Partidos disponibles de la Vigésima fecha del Campeonato de Segunda División de Chile:\n";
	for (let i = 0; i < partidos.length; i++) {
			lista += `${i + 1}) ${partidos[i].nombre} - ${partidos[i].fecha}, ${partidos[i].hora}, ${partidos[i].lugar}\nPrecios: General $${partidos[i].precioGeneral}, VIP $${partidos[i].precioVIP}\n\n`;
	}
	return lista;
}

// Calcular costo total
function calcularTotal(precio, cantidad) {
	if (cantidad > 0) {
			return precio * cantidad;
	} else {
			alert("Compra cancelada.");
			return null;
	}
}

// Mostrar mensaje de confirmación al comprador
function mostrarConfirmación(partido, tipoEntrada, cantidad, total) {
	if (total !== null) {
			alert(`Compraste ${cantidad} entradas ${tipoEntrada} para ${partido}. Total: $${total}`);
			console.log(`Confirmación: ${cantidad} entradas ${tipoEntrada} para ${partido}. Total: $${total}`);
	} else {
			alert("Compra cancelada.");
	}
}

// Resumir compra antes de confirmar
function resumenCompra(partido, tipoEntrada, cantidad, total) {
	if (confirm(`Resumen de tu compra:\n\nPartido: ${partido}\nTipo de Entrada: ${tipoEntrada}\nCantidad: ${cantidad}\nTotal: $${total}\n\n¿Confirmar compra?`)) {
			console.log(`Resumen: ${cantidad} entradas ${tipoEntrada} para ${partido}. Total: $${total}`);
			return true;
	} else {
			alert("Compra cancelada.");
			return false;
	}
}

// Comprar entradas
function comprarEntradas() {
	let eleccion = parseInt(prompt(mostrarPartidos() + "Elige el número del partido del que quieres comprar:"));
	if (eleccion > 0 && eleccion <= partidos.length) {
			let tipo = prompt("Tipo de entrada: 1) General, 2) VIP");
			if (tipo) {
					let tipoEntrada = tipo === '2' ? "VIP" : "General";
					let cantidad = parseInt(prompt("¿Cuántas entradas?"));
					let precio = tipo === '2' ? partidos[eleccion - 1].precioVIP : partidos[eleccion - 1].precioGeneral;
					let total = calcularTotal(precio, cantidad);

					// Resumen y confirmación de compra
					if (total !== null && resumenCompra(partidos[eleccion - 1].nombre, tipoEntrada, cantidad, total)) {
							mostrarConfirmación(partidos[eleccion - 1].nombre, tipoEntrada, cantidad, total);
					}
			} else {
					alert("Compra cancelada.");
			}
	} else {
			alert("Selección no válida. Inténtalo de nuevo.");
	}
}

// Iniciar proceso de compra
comprarEntradas();
