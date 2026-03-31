console.log("App iniciada");

const lista = document.getElementById("lista");
const texto = document.getElementById("texto");
const categoria = document.getElementById("categoria");
const otraCategoria = document.getElementById("otraCategoria");
const error = document.getElementById("error");
const total = document.getElementById("total");
const hechas = document.getElementById("hechas");
const limpiarBtn = document.getElementById("limpiar");

let tareas = [];

/* -------- LOCAL STORAGE -------- */

function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function cargar() {
  const data = localStorage.getItem("tareas");
  if (data) {
    tareas = JSON.parse(data);
    tareas.forEach(t => crearTareaDOM(t));
    actualizarContador();
  }
}

/* -------- UI -------- */

categoria.addEventListener("change", () => {
  if (categoria.value === "otra") {
    otraCategoria.hidden = false;
  } else {
    otraCategoria.hidden = true;
  }
});

/* ENTER para crear tarea */
texto.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});

document.getElementById("agregar").addEventListener("click", agregarTarea);

function agregarTarea() {
  const t = texto.value.trim();
  let c = categoria.value;

  if (!t) {
    error.textContent = "Escribe una tarea";
    return;
  }

  if (c === "otra") {
    c = otraCategoria.value.trim();
    if (!c) {
      error.textContent = "Escribe una categoría";
      return;
    }
  }

  error.textContent = "";

  const nueva = {
    id: Date.now(),
    texto: t,
    categoria: c,
    hecha: false,
    urgente: false
  };

  tareas.push(nueva);
  crearTareaDOM(nueva);
  guardar();
  actualizarContador();

  texto.value = "";
  otraCategoria.value = "";
}

function crearTareaDOM(tarea) {
  const li = document.createElement("li");
  li.classList.add("tarea");

  if (tarea.hecha) li.classList.add("hecha");
  if (tarea.urgente) li.classList.add("urgente");

  li.innerHTML = `
    <span>${tarea.categoria} ${tarea.texto}</span>
    <div class="acciones">
      <button>Hecha</button>
      <button>Urgente</button>
      <button>Eliminar</button>
    </div>
  `;

  const [btnHecha, btnUrgente, btnEliminar] = li.querySelectorAll("button");

  btnHecha.onclick = () => {
    tarea.hecha = !tarea.hecha;
    li.classList.toggle("hecha");
    guardar();
    actualizarContador();
  };

  btnUrgente.onclick = () => {
    tarea.urgente = !tarea.urgente;
    li.classList.toggle("urgente");
    guardar();
  };

  btnEliminar.onclick = () => {
    const ok = confirm("¿Eliminar tarea?");
    if (!ok) return;

    tareas = tareas.filter(t => t.id !== tarea.id);
    li.remove();
    guardar();
    actualizarContador();
  };

  lista.appendChild(li);
}

function actualizarContador() {
  const hechasCount = tareas.filter(t => t.hecha).length;
  total.textContent = tareas.length;
  hechas.textContent = hechasCount;
}

/* Limpiar completadas */
limpiarBtn.addEventListener("click", () => {
  const hechasLista = tareas.filter(t => t.hecha);

  if (hechasLista.length === 0) {
    alert("No hay tareas completadas");
    return;
  }

  const ok = confirm(
    `Se eliminarán ${hechasLista.length} tareas completadas`
  );
  if (!ok) return;

  tareas = tareas.filter(t => !t.hecha);
  lista.innerHTML = "";
  tareas.forEach(t => crearTareaDOM(t));

  guardar();
  actualizarContador();
});

/* Iniciar app */
cargar();