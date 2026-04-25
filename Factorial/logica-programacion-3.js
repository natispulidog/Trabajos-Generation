const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

rl.question("Ingrese un número entero: ", (txt) => {
  const numero = Number(txt);

  if (!Number.isInteger(numero)) {
    console.log("Por favor, ingrese un número entero válido.");
  } else if (numero < 0) {
    console.log("No existe factorial para números negativos.");
  } else {
    console.log(`El factorial de ${numero} es: ${factorial(numero)}`);
  }

  rl.close();
});
