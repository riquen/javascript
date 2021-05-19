class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

    falar() {
        console.log(`${this.nome} disse "Olá!"`);
    }
    programar() {
        console.log(`${this.nome} está programando.`);
    }
    jogar() {
        console.log(`${this.nome} está jogando.`);
    }
}
const p1 = new Pessoa('Henrique', 'Arantes');
p1.nomeCompleto = 'Henrique Nunes';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);