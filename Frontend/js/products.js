function getDefaultProducts() {
  return [
    {
      id: 1,
      nombre: "AMERICANO",
      precio: 11000,
      descripcion: "Café filtrado con agua caliente, suave y ligero, ideal para el día a día.",
      imagen: "https://excelso77.com/wp-content/uploads/2024/05/por-que-el-cafe-americano-se-llama-asi-te-lo-contamos.webp",
      intensidad: "Baja",
      origen: "Huila"
    },
    {
      id: 2,
      nombre: "ESPRESSO",
      precio: 9000,
      descripcion: "Café espresso intenso y corto, servido en taza pequeña con crema dorada.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqonuEb2odHPGPDTvEE_zvisNEBF-wH21Clw&s",
      intensidad: "Alta",
      origen: "Antioquia"
    },
    {
      id: 3,
      nombre: "CAPUCCINO",
      precio: 15000,
      descripcion: "Espresso con leche vaporizada y espuma cremosa, cubierto con cacao o canela.",
      imagen: "https://www.cafes-santacristina.com/sites/default/files/2023-09/capuchino.jpg",
      intensidad: "Media",
      origen: "Quindío"
    },
    {
      id: 4,
      nombre: "MOCHA",
      precio: 16000,
      descripcion: "Café con chocolate, leche vaporizada y espuma, perfecto para golosos.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjP4Yi-SLdetjzAGyvSwB7U2k2MdMOAFFCw&s",
      intensidad: "Media",
      origen: "Cundinamarca"
    },
    {
      id: 5,
      nombre: "DALGONA COFFEE",
      precio: 17000,
      descripcion: "Café batido frío con espuma cremosa sobre leche fría, refrescante y dulce.",
      imagen: "https://apasionadosporelcafe.com/wp-content/uploads/2021/08/cafe-dalgona-640.jpeg",
      intensidad: "Baja",
      origen: "Valle del Cauca"
    },
    {
      id: 6,
      nombre: "LATTE",
      precio: 14000,
      descripcion: "Espresso suave con abundante leche vaporizada y una capa fina de espuma.",
      imagen: "https://www.dolce-gusto.com.co/media/wysiwyg/24_DSK_Body.jpg",
      intensidad: "Baja",
      origen: "Huila"
    },
    {
      id: 7,
      nombre: "FRAPPE",
      precio: 18000,
      descripcion: "Café frío con hielo molido, leche y crema, ideal para un día caluroso.",
      imagen: "https://www.nescafe.com/co/sites/default/files/2023-11/frappuccino-preparado-en-cocina-desktop.jpg",
      intensidad: "Baja",
      origen: "Caldas"
    },
    {
      id: 8,
      nombre: "CAFE AZTECA",
      precio: 13000,
      descripcion: "Café tostado oscuro con cuerpo pleno y notas achocolatadas, perfecto para un espresso intenso.",
      imagen: "https://cafeguias.com/wp-content/uploads/2022/02/azteca-2.jpg",
      intensidad: "Alta",
      origen: "Tolima"
    },
    {
      id: 9,
      nombre: "CAFE IRISH",
      precio: 19000,
      descripcion: "Café con un toque de whisky irlandés y crema, delicioso y reconfortante.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eCoUwyiYqfTSXhtD_l5emNrCTxpmOuDBWw&s",
      intensidad: "Alta",
      origen: "Internacional"
    }
  ];
}

let compareList = [];

function toggleCompare(id) {
  const products = getDefaultProducts();
  const product = products.find(p => p.id === id);
  
  const index = compareList.findIndex(p => p.id === id);
  if (index !== -1) {
    compareList.splice(index, 1);
  } else {
    if (compareList.length >= 3) {
      alert("Solo puedes comparar hasta 3 productos");
      return;
    }
    compareList.push(product);
  }
  renderCompareBar();
}

function renderCompareBar() {
  let bar = document.getElementById("compareBar");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "compareBar";
    bar.className = "fixed-bottom bg-white shadow-lg p-3 border-top d-none";
    document.body.appendChild(bar);
  }

  if (compareList.length > 0) {
    bar.classList.remove("d-none");
    bar.innerHTML = `
      <div class="container d-flex justify-content-between align-items-center">
        <div>
          <strong>Comparar (${compareList.length}):</strong>
          ${compareList.map(p => `<span class="badge bg-primary ms-2">${p.nombre}</span>`).join("")}
        </div>
        <div>
          <button class="btn btn-sm btn-outline-secondary me-2" onclick="clearCompare()">Limpiar</button>
          <button class="btn btn-primary" onclick="showCompareModal()">Comparar Ahora</button>
        </div>
      </div>
    `;
  } else {
    bar.classList.add("d-none");
  }
}

function clearCompare() {
  compareList = [];
  renderCompareBar();
}

function showCompareModal() {
  let modal = document.getElementById("compareModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "compareModal";
    modal.className = "modal fade";
    modal.setAttribute("tabindex", "-1");
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Comparación de Productos</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="table-responsive">
            <table class="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Característica</th>
                  ${compareList.map(p => `<th>${p.nombre}</th>`).join("")}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fw-bold">Precio</td>
                  ${compareList.map(p => `<td>$${p.precio.toLocaleString("es-CO")}</td>`).join("")}
                </tr>
                <tr>
                  <td class="fw-bold">Intensidad</td>
                  ${compareList.map(p => `<td>${p.intensidad}</td>`).join("")}
                </tr>
                <tr>
                  <td class="fw-bold">Origen</td>
                  ${compareList.map(p => `<td>${p.origen}</td>`).join("")}
                </tr>
                <tr>
                  <td class="fw-bold">Descripción</td>
                  ${compareList.map(p => `<td class="small">${p.descripcion}</td>`).join("")}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;

  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}

function loadProducts() {
  // Cargamos productos por defecto inmediatamente para evitar esperas
  renderProducts(getDefaultProducts());

  // Intentamos actualizar con datos reales del backend si está disponible
  fetch("http://localhost:8080/api/products")
    .then(response => response.json())
    .then(products => {
      if (products && products.length > 0) {
        renderProducts(products);
      }
    })
    .catch(error => {
      console.warn("El backend no está disponible, usando datos locales.");
    });
}

function renderProducts(products) {
  const c = document.getElementById("productList");
  if (!c) return;
  c.innerHTML = "";

  products.forEach((p) => {
    c.innerHTML += `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="position-relative">
            <img src="${p.imagen}" onerror="this.onerror=null;this.src='https://via.placeholder.com/800x600?text=Cafe'" class="card-img-top" alt="${p.nombre}" style="height: 200px; object-fit: cover;">
            <button class="btn btn-light btn-sm position-absolute top-0 end-0 m-2 shadow-sm" onclick="toggleCompare(${p.id})">
              <i class="fas fa-exchange-alt"></i> Comparar
            </button>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="card-title fw-bold text-primary mb-0">${p.nombre}</h5>
              <span class="badge bg-light text-dark border">${p.intensidad || 'Media'}</span>
            </div>
            <p class="card-text text-muted small flex-grow-1">${p.descripcion}</p>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <span class="h4 text-success fw-bold mb-0">$${p.precio.toLocaleString("es-CO")}</span>
              <button class="btn btn-primary" onclick="addToCart('${p.nombre}', ${p.precio}, '${p.imagen}')">
                <i class="fas fa-cart-plus me-1"></i>Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

loadProducts();