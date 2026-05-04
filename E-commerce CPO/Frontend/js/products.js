fetch("http://localhost:8080/api/products")
  .then(r => r.json())
  .then(data => {
    const c = document.getElementById("productList");
    c.innerHTML = "";

    data.forEach(p => {
      c.innerHTML += `
        <div class="card">
          <h3>${p.nombre}</h3>
          <p>$${p.precio}</p>
          <button onclick="addToCart('${p.nombre}', ${p.precio})">
            Agregar
          </button>
        </div>
      `;
    });
  });