const { alfabeto } = require('./base');

console.log(alfabeto);
console.log(alfabeto.match(/[abc]/g));
console.log(alfabeto.match(/[abc]+/g));
console.log(alfabeto.match(/[abc123]+/g));
console.log(alfabeto.match(/[^abc123]/g));

console.log(alfabeto.match(/[0-9]/g));
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g));

console.log(alfabeto.match(/[\u00A0-\u00BA]+/g));

console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g));

console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));

console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S+/g));