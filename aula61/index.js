function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Henrique', 'Nunes');
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Object.freeze(this);
}
const p2 = new Pessoa('Henrique', 'Arantes');
console.log(p2.nome, p2.sobrenome);
const p3 = new Pessoa('Viviane', 'Xavier');
console.log(p3.nome, p3.sobrenome);