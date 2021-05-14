function falaOi() {
    return 'Oi';    
}

let vaiExecutar = 1;
console.log(vaiExecutar && falaOi());

function falaTchau() {
    return 'Tchau';
}

vaiExecutar = 0;
console.log(vaiExecutar || falaTchau());

const corUsuario = 'white';
const corPadrao = corUsuario || 'black';

console.log(corPadrao);