const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
    {nome: 'Henrique', idade: 26},
    {nome: 'Viviane', idade: 29},
    {nome: 'Miriane', idade: 48},
    {nome: 'José', idade: 52},
    {nome: 'Loki', idade: 8},
    {nome: 'Pluto', idade: 16}
];

const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);

/* const total = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(total);

const total = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(total); */

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);