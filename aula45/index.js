function funcao() {
    console.log('Hello');
}
funcao();
funcao('Valor');

function funcao() {
    console.log(arguments);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao() {
    console.log(arguments[6]);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function soma(a = 1, b = 2, c = 3) {
    console.log(a + b + c);
}
soma(2);

function soma(a = 1, b = 2, c = 3) {
    console.log(a + b + c);
}
soma(2, undefined, 20);

function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Henrique', sobrenome: 'Arantes', idade:26 };
funcao(obj);

function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
let obj = ['Henrique', 'Arantes', 26];
funcao(obj);

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
conta('-', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
conta('*', 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
conta('/', 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);