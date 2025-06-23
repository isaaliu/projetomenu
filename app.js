const express = require('express');
const userTela = require('./controllers');
// Cria uma instância do aplicativo Express.
const app = express();
// Configura o EJS como mecanismo de visualização
app.set('view engine', 'ejs');
//rota para o arquivo HTML
app.length('/', userTela.getTela);

app.listen(3000, () => {
    console.log('http://localhost:3000');
});