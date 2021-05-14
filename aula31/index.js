/*
const pessoa = {
	nome: 'Henrique',
	sobrenome: 'Arantes',
	idade: 26,
	endereco: {
		rua: 'Rua Um Dois Tres',
		numero: 456
	}
};

const nome = pessoa.nome;
console.log(nome);

const pessoa = {
	nome: 'Henrique',
	sobrenome: 'Arantes',
	idade: 26,
	endereco: {
		rua: 'Rua Um Dois Tres',
		numero: 456
	}
};

const { nome = '', sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);
*/

const pessoa = {
	nome: 'Henrique',
	sobrenome: 'Arantes',
	idade: 26,
	endereco: {
		rua: 'Rua Um Dois Tres',
		numero: 456
	}
};

const { nome, sobrenome, idade, } = pessoa;
console.log(nome, sobrenome, idade);

const { endereco: { rua, numero} } = pessoa;
console.log(rua, numero);