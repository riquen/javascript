const multiplicacao = require('./Z/mod2');

console.log(multiplicacao(2, 7));

const path = require('path');
console.log(__dirname);
console.log(path.resolve(__dirname, '..', '..', 'aula1'));