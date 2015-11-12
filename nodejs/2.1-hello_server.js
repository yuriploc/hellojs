var http = require('http');

var atendeRequisicao = function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Hi!</h1>");
  console.log('requisição feita');
  res.end();
}

var statusDoServidor = function() {
  console.log('servidor up and running!');
}

var server = http.createServer(atendeRequisicao);

server.listen(3000, statusDoServidor());
