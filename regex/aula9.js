const { lookaround } = require('./base');

console.log(lookaround);
console.log(lookaround.match(/.+[^in]active$/gim));

console.log(lookaround.match(/.+(?=[^in]active)/gim));
console.log(lookaround.match(/^(?!.+[^in]active).+$/gim));

console.log(lookaround.match(/(?<=ONLINE+).*/gim));
console.log(lookaround.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
555.555.555-55
012.250.796-10
111.111.111-11
147.285.963-10
999.999.999-99
aaa.bbb.ccc-dd
`;

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));