let num = 1;
let num2 = 2.5;
let num3 = 10.53843848;
console.log(num.toString() + num2);
// num = num.toString();
console.log(num.toString(2));
console.log(num3.toFixed(2));
console.log(Number.isInteger(num));
console.log(Number.isInteger(num2));
let temp = num * 'Olá';
console.log(Number.isNaN(temp));
temp = num * '5';
console.log(Number.isNaN(temp));