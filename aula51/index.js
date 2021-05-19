function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.acao = () => {
        console.log(`${this.nome} está programando.`);
    };
}

const p1 = new Pessoa('Henrique', 'Nunes');
const p2 = new Pessoa('Viviane', 'Xavier');
console.log(`${p1.nome} e ${p2.nome}`);
p1.acao();