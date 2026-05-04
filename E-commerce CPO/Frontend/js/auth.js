// ✅ REGISTRO CON VALIDACIONES
function register(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Todos los campos son obligatorios");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(u => u.email === email);
  if (exists) {
    alert("El usuario ya existe");
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registro exitoso ✅");
  window.location.href = "login.html";
}

// ✅ LOGIN
function login(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Credenciales incorrectas ❌");
    return;
  }

  localStorage.setItem("loggedUser", JSON.stringify(user));
  alert("Bienvenido ✅");
  window.location.href = "index.html";
}

// ✅ LOGOUT
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "login.html";
}