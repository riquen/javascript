const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (const numero of numeros) {
    if (numero === 4 || numero === 6) {
        continue;
    }

    if (numero === 13) {
        break;
    }
    console.log(numero);
}