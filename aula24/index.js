const hora = 25;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}

const num1 = 10;

if (num1 >= 0 && num1 <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (num1 >= 6 && num1 <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (num1 >= 9 && num1 <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}