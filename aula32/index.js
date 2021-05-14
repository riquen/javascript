for (let i = 1; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 5; i <= 10; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
}

for (let i = -100; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
}

for (let i = 10; i >= 1; i--) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['Maçã', 'Uva', 'Laranja', 'Melancia', 'Banana', 'Kiwi', 'Morango'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`${i} -`, frutas[i]);
}