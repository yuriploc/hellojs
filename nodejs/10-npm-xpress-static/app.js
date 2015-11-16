// módulos
var express = require('express');
var routes = require('./routes');

// nossa app
var app = express();

// diretório de arquivos estáticos (client side)
// app.use(express.static('public'));

// rotas dinâmicas
app.use('/', routes);

app.listen(3000);
