const produto = { nome: 'Raquete', preco: 150 };
console.log(Object.getOwnPropertyDescriptor(produto, 'preco'));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}