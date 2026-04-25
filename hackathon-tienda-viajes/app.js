// 1. Datos de la tienda (Array de objetos) 
const destinos = [
    { 
        id: 1, 
        nombre: "Cartagena", 
        precio: 1200000, 
        // Imagen fija de Cartagena 
        imagen: "https://www.viajes.cl/hubfs/Torre%20del%20Reloj%20en%20Cartagena%20de%20Indias%2C%20Colombia.jpg" 
    },
    { 
        id: 2, 
        nombre: "Santorini", 
        precio: 3500000, 
        // Imagen fija de Santorini (Unsplash) 
        imagen: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=400&auto=format&fit=crop" 
    },
    { 
        id: 3, 
        nombre: "París", 
        precio: 4200000, 
        // Imagen fija de París (Unsplash) 
        imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=400&auto=format&fit=crop" 
    }
];

// 2. Persistencia con localStorage [cite: 23]
let carrito = JSON.parse(localStorage.getItem("viajes_cart")) || [];

// 3. Función Principal de Renderizado [cite: 21, 25]
function renderizarProductos() {
    const contenedor = document.getElementById("product-grid");
    if (!contenedor) return;

    contenedor.innerHTML = ""; // Limpiamos antes de renderizar [cite: 19]

    destinos.forEach(destino => {
        const cardHtml = `
            <div class="col">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${destino.imagen}" class="card-img-top product-img" alt="${destino.nombre}" style="height: 200px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h4 class="card-title">${destino.nombre}</h4>
                        <p class="card-text fw-bold fs-5 text-primary">$${destino.precio.toLocaleString()}</p>
                        <button class="btn btn-primary w-100" onclick="agregarAlCarrito(${destino.id})">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += cardHtml;
    });
}

// 4. Lógica del Carrito (Agregar/Eliminar) [cite: 22]
window.agregarAlCarrito = function(id) {
    const producto = destinos.find(p => p.id === id);
    if (producto) {
        carrito.push({ ...producto, uniqueId: Date.now() }); // Evitamos duplicados de ID en el DOM
        actualizarInterfaz();
    }
};

window.eliminarDelCarrito = function(index) {
    carrito.splice(index, 1);
    actualizarInterfaz();
};

// 5. Sincronización Global [cite: 23, 25]
function actualizarInterfaz() {
    const listaCarrito = document.getElementById("cart-items");
    const totalElemento = document.getElementById("cart-total");

    if (!listaCarrito || !totalElemento) return;

    // Dibujar items en el carrito
    listaCarrito.innerHTML = carrito.map((item, index) => `
        <li class="list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn">
            <div>
                <span class="fw-bold">${item.nombre}</span><br>
                <small class="text-muted">$${item.precio.toLocaleString()}</small>
            </div>
            <button class="btn btn-outline-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>
        </li>
    `).join("");

    // Calcular total Real
    const totalReal = carrito.reduce((acc, item) => acc + item.precio, 0);
    
    totalElemento.innerText = totalReal.toLocaleString();

    // Guardar en localStorage [cite: 23]
    localStorage.setItem("viajes_cart", JSON.stringify(carrito));
}

// 6. Inicio automático al cargar el documento
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
    actualizarInterfaz();
});