const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Función que permite preguntar datos al usuario en consola
const preguntar = (pregunta) => {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
};

// Menú principal de la calculadora
const menu = async () => {
    console.log("\n===== CALCULADORA ZM ===== ");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Módulo");
    console.log("6. Raíz cuadrada");
    console.log("7. Porcentaje");
    console.log("8. Potencia");
    console.log("9. Salir\n");

    // Preguntamos qué opción quiere el usuario
    const opcion = await preguntar("Selecciona una opcion: ");

    // Caso de salida: si elige la opción 9
    if (opcion === "9") {
        console.log("👋 Gracias por usar la calculadora");
        rl.close();
        return;
    }

    let num1, num2;

    // Para algunas operaciones solo necesitamos un número (ej: raíz cuadrada)
    if (opcion === "6") {
        num1 = Number(await preguntar("Ingrese el número: "));
    } else {
        num1 = Number(await preguntar("Ingrese el primer número: "));
        num2 = Number(await preguntar("Ingrese el segundo número: "));
    }

    // Switch con todas las operaciones
    switch (opcion) {
        case "1": // Suma
            console.log(`✅ Resultado: ${num1 + num2}`);
            break;
        case "2": // Resta
            console.log(`✅ Resultado: ${num1 - num2}`);
            break;
        case "3": // Multiplicación
            console.log(`✅ Resultado: ${num1 * num2}`);
            break;
        case "4": // División
            if (num2 !== 0) {
                console.log(`✅ Resultado: ${num1 / num2}`);
            } else {
                console.log("⚠️ No se puede dividir entre 0");
            }
            break;
        case "5": // Módulo
            if (num2 !== 0) {
                console.log(`✅ Resultado: ${num1 % num2}`);
            } else {
                console.log("⚠️ No se puede calcular módulo con 0");
            }
            break;
        case "6": // Raíz cuadrada
            if (num1 >= 0) {
                console.log(`✅ Resultado: ${Math.sqrt(num1)}`);
            } else {
                console.log("⚠️ No se puede calcular raíz cuadrada de un número negativo");
            }
            break;
        case "7": // Porcentaje
            console.log(`✅ Resultado: ${(num1 * num2) / 100}`);
            break;
        case "8": // Potencia
            console.log(`✅ Resultado: ${Math.pow(num1, num2)}`);
            break;
        default:
            console.log("❌ Opción no válida");
            break;
    }

    // Vuelve a mostrar el menú después de cada operación
    menu();
};

// Ejecutamos la calculadora
menu();
