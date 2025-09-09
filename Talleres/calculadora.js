const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcular(operacion, num1, num2) {
  let resultado;
  switch (operacion) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        console.log("Error: No se permite la división por cero.");
        rl.close();
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      console.log("Error: Operación inválida.");
      rl.close();
      return;
  }
  console.log(`${num1} ${operacion} ${num2} = ${resultado}`);
  rl.close();
}

rl.question("Introduce el operador (+, -, *, /): ", (operacion) => {
  rl.question("Ingresa el primer número: ", (num1) => {
    rl.question("Ingresa el segundo número: ", (num2) => {
      calcular(operacion, parseFloat(num1), parseFloat(num2));
    });
  });
});