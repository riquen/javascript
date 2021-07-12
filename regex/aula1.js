const { texto } = require('./base');

// const regex1 = /henrique/;
// const regex1 = /henrique/g;
const regex1 = /henrique/gi;
const regex2 = /maximiliano/i;
const regex3 = /(Sacro|Imperador)(Romano-Germânico)/i;
const found = regex3.exec(texto);

console.log(regex1.test(texto));
console.log(regex2.exec(texto).index);

if (found) {
	console.log(found[0]);
	console.log(found[1]);
	console.log(found[2]);
}