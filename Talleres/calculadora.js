const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const preguntar = (pregunta) => {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
};

const menu = async () => {
    console.log("\n===== CALCULADORA ===== ");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Modulo");
    console.log("6. Raiz cuadrada");
    console.log("7. Porcentaje");
    console.log("5. Salir\n");

    const opcion = await preguntar("Selecciona una opcion: ");

    if (opcion === "5") {
        console.log("👋 Gracias por usar la calculadora");
        rl.close();
        return;
    }

    const num1 = Number(await preguntar("Ingrese el primer numero: "));
    const num2 = Number(await preguntar("Ingrese el segundo numero: "));

    switch (opcion) {
        case "1":
            console.log(`✅ Resultado: ${num1 + num2}`);
            break;
        case "2":
            console.log(`✅ Resultado: ${num1 - num2}`);
            break;
        case "3":
            console.log(`✅ Resultado: ${num1 * num2}`);
            break;
        case "4":
            if (num2 !== 0) {
                console.log(`✅ Resultado: ${num1 / num2}`);
            } else {
                console.log("⚠️ No se puede dividir por 0");
            }
            break;
        default:
            console.log("❌ Opcion no valida");
            break;
    }

    menu();
};

menu();
