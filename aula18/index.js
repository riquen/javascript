const alunos = ['Henrique', 'Viviane', 'Loki'];
console.log(alunos);
console.log(alunos[2]);
alunos.pop();
alunos[2] = 'Anny';
alunos.push('Fernanda');
alunos.unshift('Pluto');
alunos[alunos.length] = 'Miriane';
alunos.shift();
console.log(alunos);
console.log(alunos.length);
delete alunos[3];
alunos[3] = 'Natalia';
console.log(alunos);
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));
console.log(typeof alunos);
console.log(alunos instanceof Array);