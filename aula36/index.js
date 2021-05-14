let controle = 0;

while (controle <= 10) {
    console.log(controle);
    controle++;
}

console.log('------------------');

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 100;
let rand = random(min, max);

while (rand !== 17) {
    rand = random(min, max);
    console.log(rand);
}

console.log('------------------');

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 17);