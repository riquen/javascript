let data = new Date();
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay());

data = new Date(0);
console.log(data.toString());

let tresHoras = 60 * 60 * 3 * 1000;
data = new Date(0 + tresHoras);
console.log(data.toString());

let umDia = 60 * 60 * 24 * 1000;
data = new Date(0 + tresHoras + umDia);
console.log(data.toString());

function zeroAEsquerda(num) {
	return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
	const dia = zeroAEsquerda(data.getDate());
	const mes = zeroAEsquerda(data.getMonth() + 1);
	const ano = zeroAEsquerda(data.getFullYear());
	const hora = zeroAEsquerda(data.getHours());
	const min = zeroAEsquerda(data.getMinutes());
	const seg = zeroAEsquerda(data.getSeconds());
	
	return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);