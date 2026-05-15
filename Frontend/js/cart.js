function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(nombre, precio, imagen) {
  let cart = getCart();

  const index = cart.findIndex(item => item.nombre === nombre);

  if (index !== -1) {
    cart[index].cantidad++;
  } else {
    cart.push({ nombre, precio, imagen, cantidad: 1 });
  }

  saveCart(cart);
  alert("Agregado ✅");
}

function renderCart() {
  const cart = getCart();
  const cartBody = document.getElementById("cartBody");
  const totalSpan = document.getElementById("total");

  if (!cartBody) return;

  cartBody.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    cartBody.innerHTML += `
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <img src="${item.imagen}" alt="${item.nombre}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;" class="me-3">
            <span class="fw-bold">${item.nombre}</span>
          </div>
        </td>
        <td>$${item.precio.toLocaleString("es-CO")}</td>
        <td>
          <div class="input-group input-group-sm" style="width: 100px;">
            <button class="btn btn-outline-secondary" type="button" onclick="decrease(${index})">-</button>
            <input type="text" class="form-control text-center" value="${item.cantidad}" readonly>
            <button class="btn btn-outline-secondary" type="button" onclick="increase(${index})">+</button>
          </div>
        </td>
        <td class="fw-bold">$${subtotal.toLocaleString("es-CO")}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  });

  if (cart.length === 0) {
    cartBody.innerHTML = '<tr><td colspan="5" class="text-center py-4">Tu carrito está vacío ☕</td></tr>';
  }

  totalSpan.innerText = total.toLocaleString("es-CO");
}

function increase(index) {
  let cart = getCart();
  cart[index].cantidad++;
  saveCart(cart);
  renderCart();
}

function decrease(index) {
  let cart = getCart();

  if (cart[index].cantidad > 1) {
    cart[index].cantidad--;
  } else {
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCart();
}

function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function checkout() {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }
  alert("¡Compra realizada con éxito! Pronto recibirás tu café Gagu.");
  localStorage.removeItem("cart");
  renderCart();
}