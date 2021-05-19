const produto1 = { nome: 'Caneca', preco: 15 };
const produto2 = produto1;
produto1.nome = 'Copo';
produto2.preco = 10;
console.log(produto1);
console.log(produto2);

const produto3 = {
    ...produto1,
    estoque: 6
};
produto3.nome = 'Taça';
produto3.preco = 20;
console.log(produto3);

const produto4 = Object.assign({}, produto3, { material: 'Vidro' });
console.log(produto4);

const produto5 = { nome: produto1.nome };
console.log(produto5);