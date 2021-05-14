function saudacao(nome) {
	return `Hello ${nome}!`;
}

const variavel = saudacao('Henrique');
console.log(variavel);

function soma(x = 1, y = 1) {
	const resultado = x + y;
	return resultado;
}

console.log(soma(2, 2));
console.log(soma(4));
console.log(soma());

const raizQuadrada = function(n) {
	return n ** 0.5;
};

console.log(raizQuadrada(144));

const divisao = (x = 10, y = 5) => {
	return x / y;
};

console.log(divisao(100, 10));

const potencia = n => n**3;

console.log(potencia(2));