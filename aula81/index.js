function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Bad value');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 2000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    });