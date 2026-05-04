fetch("http://localhost:8080/api/workshops")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("workshopList");
    container.innerHTML = "";

    data.forEach(w => {
      container.innerHTML += `
        <div class="card">
          <h3>${w.nombre}</h3>
          <p>${w.fecha}</p>
          <p>$${w.precio}</p>
          <button onclick="addToCart('${w.nombre}', ${w.precio})">
            Reservar
          </button>
        </div>
      `;
    });
  });