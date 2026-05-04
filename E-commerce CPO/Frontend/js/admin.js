const API = "http://localhost:8080/api/products";

function load() {
  fetch(API)
    .then(r => r.json())
    .then(data => {
      const list = document.getElementById("lista");
      list.innerHTML = "";

      data.forEach(p => {
        list.innerHTML += `
          <li>
            ${p.nombre} - $${p.precio}
            <button onclick="del(${p.id})">❌</button>
          </li>
        `;
      });
    });
}

function crear() {
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: nombre.value,
      precio: precio.value,
      imagen: imagen.value
    })
  }).then(load);
}

function del(id) {
  fetch(`${API}/${id}`, { method: "DELETE" }).then(load);
}

load();