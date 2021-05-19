const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
    {nome: 'Henrique', idade: 26},
    {nome: 'Viviane', idade: 29},
    {nome: 'Miriane', idade: 48},
    {nome: 'José', idade: 52},
    {nome: 'Loki', idade: 8},
    {nome: 'Pluto', idade: 16}
];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);
console.log(numerosPares);