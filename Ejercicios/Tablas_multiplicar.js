// empieza con la primera tabla, la del 1
let base = 1;

// controla las tablas de multiplicar de 1 a 10
while (base <= 10) {
    
    // para cada tabla el índice empieza en 1
    let indice = 1;

    // recorre los números del 1 al 10 para multiplicar
    while (indice <= 10) {
        // imprime la multiplicación actual
        console.log(`${base} x ${indice} = ${base * indice}`);
        
        // aumenta el índice en 1 para pasar a la siguiente multiplicación
        indice++;
    }

    // imprime una línea separadora para distinguir cada tabla
    console.log("--------------");

    // aumenta la base en 1 para pasar a la siguiente tabla
    base++;
}