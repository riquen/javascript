(function() {
    console.log(123456);
    const nome = 'Henrique';
    console.log(nome);
})();

(function() {
    const sobrenome = 'Arantes';
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }

    function falaNome() {
        console.log(criaNome('Henrique'));
    }

    falaNome();
})();

(function(idade, peso, altura) {
    const sobrenome = 'Arantes';
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }

    function falaNome() {
        console.log(criaNome('Henrique'));
    }

    falaNome();
    console.log(`${idade} anos ${peso}kg ${altura}m`);
})(26, 61, 1.70);