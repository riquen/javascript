/* function criaPessoa (nome, sobrenome, idade) {
	return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Henrique', 'Nunes', 26);
const pessoa2 = criaPessoa('Viviane', 'Nunes', 29);
const pessoa3 = criaPessoa('José', 'Nunes', 52);
const pessoa4 = criaPessoa('Miriane', 'Nunes', 48);
const pessoa5 = criaPessoa('Loki', 'Nunes', 8);

console.log(pessoa1.nome, pessoa2.nome); */

const pessoa1 = {
	nome: 'Henrique',
	sobrenome: 'Nunes',
	idade: 26,

	fala() {
		console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos.`);
	},

	incrementaIdade() {
		this.idade++;
	}
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();