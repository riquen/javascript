function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Bad value');
                return;
            }
            resolve(msg);
            return;
        }, tempo);
    });
}

const promises = [
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
    esperaAi(1000, rand(1, 3))
];

Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    });