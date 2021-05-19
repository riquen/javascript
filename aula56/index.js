const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

const pessoas = [
    {nome: 'Henrique', idade: 26},
    {nome: 'Viviane', idade: 29},
    {nome: 'Miriane', idade: 48},
    {nome: 'José', idade: 52},
    {nome: 'Loki', idade: 8},
    {nome: 'Pluto', idade: 16}
];
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);
const idades = pessoas.map(obj => obj.idade);
console.log(idades);
const ids = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice + 1;
    return newObj;
});
console.log(ids);
console.log(pessoas);