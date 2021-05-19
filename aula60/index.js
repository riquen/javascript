const pessoa1 = {
    nome: 'Henrique',
    sobrenome: 'Arantes'
}
console.log(pessoa1.nome, pessoa1.sobrenome);

const pessoa2 = new Object();
pessoa2.nome = 'Henrique';
pessoa2.sobrenome = 'Nunes';
pessoa2.idade = 26;
pessoa2.falaNome = function() {
    return `${this.nome} disse "Oi".`;
};
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa2.nome, pessoa2.sobrenome);
console.log(pessoa2.falaNome());
console.log(pessoa2.getDataNascimento());