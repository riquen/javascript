const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuario?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Nome enviado: <b>${req.body.nome}</b>`);
});

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000.');
    console.log('Acessar http://localhost:3000');
});