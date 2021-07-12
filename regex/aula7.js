const { cpfs2 } = require('./base');

const cpf = '254.224.877-45';
const regex = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
const regex2 = /^(\d{3}\.){2}\d{3}\-\d{2}$/g;

console.log(cpfs2);
console.log(cpf.match(regex));
console.log(cpfs2.match(regex2));