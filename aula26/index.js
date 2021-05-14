let pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
	console.log('VIP user');
} else {
	console.log('Normal user');
}

pontuacaoUsuario = 1000;
let nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP user' : 'Normal user';
console.log(nivelUsuario);