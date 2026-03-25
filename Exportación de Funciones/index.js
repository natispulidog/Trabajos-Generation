// index.js
const { Usuario, UsuarioVIP } = require("./usuario");
const { Producto, ProductoDigital } = require("./producto");

// --- USUARIOS ---
const usuario1 = new Usuario("Nata", "natalia.diaz@external.generation.org", "cliente");
const usuario2 = new Usuario("Ana", "ana.alvarado@external.generation.org", "administrador");
const usuarioVIP = new UsuarioVIP("Jessica", "jessica.pineda@external.generation.org", "Gold");

// Desactivar uno
usuario2.desactivar();

// --- PRODUCTOS ---
const prod1 = new Producto("Camisa", 50000, "ropa");
const prod2 = new Producto("Laptop", 3000000, "tecnología");
const dig1 = new ProductoDigital("Curso JS", 120000, "anual");
const dig2 = new ProductoDigital("Antivirus", 80000, "mensual");

// Descuento del 20% a un producto físico
const descuentoLaptop = prod2.aplicarDescuento(20);

// --- OUTPUT ---
console.log("\n=== TARJETAS DE PRODUCTOS ===");
[prod1, prod2, dig1, dig2].forEach(p => console.log(p.tarjeta()));

console.log("\n=== PRECIO CON DESCUENTO (20%) ===");
console.log(`Laptop con descuento: $${descuentoLaptop}`);

console.log("\n=== RESUMEN DE USUARIOS ===");
[usuario1, usuario2, usuarioVIP].forEach(u => console.log(u.resumen()));