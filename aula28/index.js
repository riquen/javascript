/*
let data = new Date('1995-04-17 06:40:30');
let diaSemana = data.getDay();
console.log(diaSemana);

data = new Date();
diaSemana = data.getDay();
console.log(diaSemana);

let diaSemanaTexto;

switch (diaSemana) {
case 0:
	diaSemanaTexto = 'Domingo';
	break;
case 1:
	diaSemanaTexto = 'Segunda';
	break;
case 2:
	diaSemanaTexto = 'Terça';
	break;
case 3:
	diaSemanaTexto = 'Quarta';
	break;
case 4:
	diaSemanaTexto = 'Quinta';
	break;
case 5:
	diaSemanaTexto = 'Sexta';
	break;
case 6:
	diaSemanaTexto = 'Sábado';
	break;
default:
	diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto);
*/

function getDiaSemanaTexto(diaSemana) {
	let diaSemanaTexto;
	
	switch (diaSemana) {
	case 0:
		diaSemanaTexto = 'Domingo';
		return diaSemanaTexto;
	case 1:
		diaSemanaTexto = 'Segunda';
		return diaSemanaTexto;
	case 2:
		diaSemanaTexto = 'Terça';
		return diaSemanaTexto;
	case 3:
		diaSemanaTexto = 'Quarta';
		return diaSemanaTexto;
	case 4:
		diaSemanaTexto = 'Quinta';
		return diaSemanaTexto;
	case 5:
		diaSemanaTexto = 'Sexta';
		return diaSemanaTexto;
	case 6:
		diaSemanaTexto = 'Sábado';
		return diaSemanaTexto;
	default:
		diaSemanaTexto = '';
	}
}

let data = new Date('1995-04-17 06:40:30');
let diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);

data = new Date();
diaSemana = data.getDay();
diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);