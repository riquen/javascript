/* const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Henrique Arantes Nunes',
    descricao: 'Meu nome'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e)); */

exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Hello World!',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};