var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  // __dirname -> diretorio raiz da app
    fs.readFile( __dirname + '/5-index.html', function(erro, arquivo) {
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(arquivo);
      res.end();
    });
});

server.listen(3000);
