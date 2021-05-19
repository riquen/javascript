function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Caneca', 15);
p1.desconto(10);
console.log(p1);
p1.aumento(10);
console.log(p1);

const p2 = {
    nome: 'Taça',
    preco: 20
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(10);
console.log(p2);
p2.aumento(10);
console.log(p2);

const p3 = Object.create(Produto.prototype);
p3.nome = 'Garrafa';
p3.preco = 50;

p3.desconto(10);
console.log(p3);
p3.aumento(10);
console.log(p3);