fetch("http://localhost:8080/api/farm-visits")
  .then(r => r.json())
  .then(data => {
    const c = document.getElementById("farmList");
    c.innerHTML = "";

    data.forEach(f => {
      c.innerHTML += `
        <div class="card">
          <h3>${f.nombre}</h3>
          <p>${f.duracion}</p>
          <p>$${f.precio}</p>
          <button onclick="addToCart('${f.nombre}', ${f.precio})">
            Reservar
          </button>
        </div>
      `;
    });
  });