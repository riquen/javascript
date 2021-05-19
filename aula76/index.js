class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' está ligado.');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' está desligado.');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Celular');
console.log(d1);
d1.ligar();
console.log(d1.ligar());
d1.desligar();
console.log(d1.desligar());

class Celular extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const c1 = new Celular('Iphone', 'Roxo', 12);
console.log(c1);
c1.ligar();
console.log(c1.ligar());
c1.desligar();
console.log(c1.desligar());

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Método alterado.');
    }

    falaOi() {
        console.log('Oi');
    }
}

const t1 = new Tablet('iPad', true);
console.log(t1);
console.log(t1.ligar());
console.log(t1.desligar());
console.log(t1.falaOi());