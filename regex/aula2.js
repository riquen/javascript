const { texto } = require('./base');
const regex1 = /henrique|maximiliano/gi;

console.log(texto.match(regex1));
console.log(texto.replace(/henrique/gi, 'Loki'));
// console.log(texto.replace(/(henrique|maximiliano)/gi, '"$1"'));
// console.log(texto.replace(/(henrique|maximiliano)/gi, '<b>$1</b>'));
// console.log(texto.replace(/(henrique|maximiliano)/gi, function(input) {
//	return 'SR. ' + input.toUpperCase() + ' JR';
// }));