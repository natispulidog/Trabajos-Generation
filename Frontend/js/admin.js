function load() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const list = document.getElementById("lista");
  list.innerHTML = "";

  products.forEach((p, index) => {
    list.innerHTML += `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title fw-bold">${p.nombre}</h5>
            <p class="card-text text-success fw-bold h5">$${p.precio}</p>
            <button class="btn btn-danger w-100" onclick="del(${index})">
              <i class="fas fa-trash me-2"></i>Eliminar
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function crear(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const imagen = document.getElementById("imagen").value;

  if (!nombre || !precio || !imagen) {
    alert("Todos los campos son obligatorios");
    return;
  }

  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({ nombre, precio, imagen });
  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("createForm").reset();
  load();
}

function del(index) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  load();
}

load();