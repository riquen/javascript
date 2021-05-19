const pessoas = [
    { id: 3, nome: 'Henrique' },
    { id: 2, nome: 'Viviane' },
    { id: 1, nome: 'Miriane' }
];

/* const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
} */

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}
console.log(novasPessoas);
console.log(novasPessoas.get(2));

for (const pessoa of novasPessoas) {
    console.log(pessoa);
}

//                                                   .keys()
//                                                   .values()
for (const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome);
}