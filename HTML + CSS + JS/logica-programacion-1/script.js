const resultado = document.getElementById("resultado");
const boton = document.getElementById("btn");

boton.addEventListener("click", iniciarPrograma);

function solicitarNumero(mensaje) {
  return Number(prompt(mensaje));
}

function iniciarPrograma() {
  const n1 = solicitarNumero("Ingresa el primer número:");
  const n2 = solicitarNumero("Ingresa el segundo número:");
  const n3 = solicitarNumero("Ingresa el tercer número:");

  if ([n1, n2, n3].some(isNaN)) {
    mostrarError("Uno o más valores no son numéricos.");
    return;
  }

  const numeros = [n1, n2, n3];

  if (n1 === n2 && n2 === n3) {
    mostrarResultado(`
      <strong>✅ Los números son iguales</strong><br>
      ${numeros.join(", ")}
    `);
    console.log("Números iguales:", numeros);
    return;
  }

  const mayorAMenor = [...numeros].sort((a, b) => b - a);
  const menorAMayor = [...numeros].sort((a, b) => a - b);

  const salidaHTML = `
    <strong>📌 Mayor:</strong> ${mayorAMenor[0]}<br>
    <strong>📌 Centro:</strong> ${mayorAMenor[1]}<br>
    <strong>📌 Menor:</strong> ${mayorAMenor[2]}
    <hr>
    <strong>⬇ Mayor a menor:</strong><br>
    ${mayorAMenor.join(", ")}<br><br>
    <strong>⬆ Menor a mayor:</strong><br>
    ${menorAMayor.join(", ")}
  `;

  mostrarResultado(salidaHTML);

  console.log("Mayor a menor:", mayorAMenor);
  console.log("Menor a mayor:", menorAMayor);
}

function mostrarResultado(html) {
  resultado.innerHTML = html;
}

function mostrarError(mensaje) {
  resultado.innerHTML = `<span class="error">❌ ${mensaje}</span>`;
  console.error(mensaje);
}
