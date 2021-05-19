function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.falaOi = () => '"Olá!"';
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

const p1 = new Pessoa('Henrique', 'Nunes');
const p2 = new Pessoa('Viviane', 'Xavier');
console.log(`${p2.nomeCompleto()} está falando ${p2.falaOi()}`);