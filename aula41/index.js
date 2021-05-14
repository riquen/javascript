function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log(soma(6, 5));
} catch (error) {
    console.log(error);
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw('Informe uma Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('17-04-1995 06:40:30');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    console.log(e);
} finally {
    console.log('Hello World');
}