let nombreUsuario = prompt("¡Bienvenido! Ingresa tu nombre:");
const edadMinima = 18;
let productos = [
    { nombre: "Campera", precio: 5000 },
    { nombre: "Gorra", precio: 1500 },
    { nombre: "Zapatillas", precio: 8000 },
    { nombre: "Remera", precio: 3000 }
];
let carrito = [];
productos.sort((a, b) => a.precio - b.precio);

function mostrarCatalogo() {
    let mensaje = "Catálogo de productos (de menor a mayor precio):\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    mensaje += "Escribe el número del producto para agregarlo al carrito o '0' para salir.";
    return mensaje;
}

function agregarAlCarrito() {
    let seleccion;
    do {
        seleccion = parseInt(prompt(mostrarCatalogo()));
        if (seleccion > 0 && seleccion <= productos.length) {
            carrito.push(productos[seleccion - 1]);
            alert(`${productos[seleccion - 1].nombre} ha sido agregado al carrito.`);
        } else if (seleccion !== 0) {
            alert("Por favor, ingresa una opción válida.");
        }
    } while (seleccion !== 0);
}

function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

if (confirm("¿Eres mayor de 18 años?")) {
    alert(`Hola, ${nombreUsuario}! Bienvenido a nuestra tienda.`);
    agregarAlCarrito();

    if (carrito.length > 0) {
        let resumen = "Has agregado al carrito:\n" + carrito.map(item => item.nombre).join(", ");
        resumen += `\nTotal a pagar: $${calcularTotal()}`;
        alert(resumen);
    } else {
        alert("No has agregado ningún producto al carrito.");
    }
} else {
    alert("Lo sentimos, debes ser mayor de 18 años para ingresar.");
}

console.log("Carrito de compras:", carrito);
console.log("Total a pagar:", calcularTotal());
