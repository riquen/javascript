const { texto, arquivos } = require('./base');

console.log(texto);

const regex1 = /He+nrique+/gi
console.log(texto.match(regex1));

const regex2 = /\.jpg/gi
// const regex3 = /\.jpe?g/gi
// const regex3 = /\.jpe{0,}g/gi
const regex3 = /\.((jp|JP)(e|E)?(g|G))/g

for (const arquivo of arquivos) {
    console.log(arquivo, arquivo.match(regex2));
}

for (const arquivo of arquivos) {
    const valido = arquivo.match(regex3);

    // if (!valido) continue;

    console.log(arquivo, valido);
}