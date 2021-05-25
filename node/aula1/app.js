/* const mod1 = require('./mod1');
const falaNome = mod1.falaNome;
console.log(falaNome()); */

/* const falaNome = require('./mod1').falaNome;
console.log(falaNome()); */

/* const { NOME, sobrenome, falaNome } = require('./mod1');
console.log(NOME); */

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Henrique');
console.log(p1.nome);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));