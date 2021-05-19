const falar = {
    falar() {
        console.log(`${this.nome} disse "Olá!"`);
    }
};
const programar = {
    programar() {
        console.log(`${this.nome} está programando.`);
    }
};
const jogar = {
    jogar() {
        console.log(`${this.nome} está jogando.`);
    }
};

const pessoaPrototype = { ...falar, ...programar, ...jogar };
// const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}
const p1 = criaPessoa('Henrique', 'Nunes');
p1.falar();
p1.programar();
p1.jogar();