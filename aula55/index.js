const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pessoas = [
    {nome: 'Henrique', idade: 26},
    {nome: 'Miriane', idade: 48},
    {nome: 'José', idade: 52},
    {nome: 'Viviane', idade: 29},
    {nome: 'Loki', idade: 8},
    {nome: 'Pluto', idade: 16}
];

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

const nomesGrandes = pessoas.filter(obj => obj.nome.length > 5);
const maioresDeTrinta = pessoas.filter(obj => obj.idade > 30);
const terminaComE = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('e'));
console.log(nomesGrandes, maioresDeTrinta, terminaComE);