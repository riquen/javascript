const frutas = ['Laranja', 'Limão', 'Maçã', 'Banana', 'Melancia', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);    
}

for (const i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Henrique',
    sobrenome: 'Arantes',
    idade: 26
};

for (const i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`);
}

const nome = 'Henrique Arantes';

for (const valor of nome) {
    console.log(valor);
}

frutas.forEach(function(valor, indice) {
    console.log(indice, valor);
});