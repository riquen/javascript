/* const nome = 'Henrique';
const sobrenome = 'Arantes';

const falaNome = () => nome + ' ' + sobrenome;

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

exports.NOME = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.idade = 26; */

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;