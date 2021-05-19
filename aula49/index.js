function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(acao = 'programando') {
            return `${this.nome} está ${acao}.`;
        },
        altura,
        peso,
        get imc() {
            const imc = this.peso / (this.altura ** 2);
            return imc.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Henrique', 'Arantes', 1.70, 61);
console.log(p1.fala('estudando'));
console.log(`Seu IMC é ${p1.imc}`);
p1.nomeCompleto = 'Henrique Arantes Nunes';
console.log(`Seu nome completo é ${p1.nomeCompleto}`);
console.log(p1.fala());