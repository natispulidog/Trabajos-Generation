function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(nombre, precio) {
  let cart = getCart();

  const index = cart.findIndex(item => item.nombre === nombre);

  if (index !== -1) {
    cart[index].cantidad++;
  } else {
    cart.push({ nombre, precio, cantidad: 1 });
  }

  saveCart(cart);
  alert("Agregado ✅");
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

function renderCart() {
  const cart = getCart();
  const body = document.getElementById("cartBody");
  const totalSpan = document.getElementById("total");

  body.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    if (!item.cantidad) item.cantidad = 1;

    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    body.innerHTML += `
      <tr>
        <td>${item.nombre}</td>
        <td>$${item.precio}</td>
        <td>
          <button onclick="decrease(${index})">−</button>
          ${item.cantidad}
          <button onclick="increase(${index})">+</button>
        </td>
        <td>$${subtotal}</td>
        <td>
          <button onclick="removeItem(${index})">❌</button>
        </td>
      </tr>
    `;
  });

  totalSpan.textContent = total;
}