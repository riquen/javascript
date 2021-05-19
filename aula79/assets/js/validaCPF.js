class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial);
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    static geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;
        for (let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.sequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }
}

const validaCpf1 = new ValidaCPF('705.484.450-52');
const validaCpf2 = new ValidaCPF('070.987.720-03');
const validaCpf3 = new ValidaCPF('111.111.111-11');

/* if (validaCpf1.valida()) {
    console.log('CPF válido.');
} else {
    console.log('CPF inválido.');
}

if (validaCpf2.valida()) {
    console.log('CPF válido.');
} else {
    console.log('CPF inválido.');
}

if (validaCpf3.valida()) {
    console.log('CPF válido.');
} else {
    console.log('CPF inválido.');
} */