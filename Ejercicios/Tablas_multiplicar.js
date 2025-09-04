let base = 1;

while (base <= 10) {
    let indice = 1;
    while (indice <= 10) {
        console.log(`${base} x ${indice} = ${base * indice}`);
        indice++;
    }
    console.log("--------------");
    base++;
}