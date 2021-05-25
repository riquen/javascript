import { nome as nome2, sobrenome, idade, soma, Pessoa } from './modulo1';
const nome = 'Viviane';
console.log(nome);
console.log(nome2, sobrenome, idade);
console.log(soma(6, 6));

const p1 = new Pessoa('Henrique', 'Nunes');
console.log(p1);

import mult from "./modulo1";
console.log(mult(6, 6));