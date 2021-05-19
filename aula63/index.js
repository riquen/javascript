function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => estoque,
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Bad value');
            }
            estoque = valor;
        }
    });
}
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 15;
console.log(p1.estoque);

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}
const p2 = criaProduto('Bermuda');
p2.nome = 'Short';
console.log(p2.nome);