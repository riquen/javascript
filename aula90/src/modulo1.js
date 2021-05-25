const nome = 'Henrique';
const sobrenome = 'Arantes';
const idade = 26;

export function soma(x, y) {
    return x + y;
}

export { nome, sobrenome, idade };

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default (x, y) => x * y;