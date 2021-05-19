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

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Bad value');
    } else {
        return esperaAi('Baixei a página', 2000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => {
        console.log('ERRO:', e);
    });