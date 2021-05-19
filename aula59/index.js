const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
    {nome: 'Henrique', idade: 26},
    {nome: 'Viviane', idade: 29},
    {nome: 'Miriane', idade: 48},
    {nome: 'José', idade: 52},
    {nome: 'Loki', idade: 8},
    {nome: 'Pluto', idade: 16}
];

let total = 0;
numeros.forEach(valor => total += valor);
console.log(total);