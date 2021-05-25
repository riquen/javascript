const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'arquivo1.json');
const escritor = require('./modules/escritor');
const leitor = require('./modules/leitor');

const pessoas = [
    { nome: 'Henrique' },
    { nome: 'Viviane' },
    { nome: 'Miriane' },
    { nome: 'José' }
];
const json = JSON.stringify(pessoas, '', 2);
escritor(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await leitor(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);

// const caminhoArquivo = path.resolve(__dirname, '..', 'arquivo1.txt');
// const caminhoArquivo = path.resolve(__dirname, '..', 'arquivo2.txt');

// fs.writeFile(caminhoArquivo, 'Hello World!', { flag: 'w' });
// fs.writeFile(caminhoArquivo, 'Hello World!\n', { flag: 'a' });
// fs.writeFile(caminhoArquivo, 'Welcome', { flag: 'a' });
// fs.writeFile(caminhoArquivo, json, { flag: 'w' });