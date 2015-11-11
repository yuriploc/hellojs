var http = require('http');
var url = require('url');
var fs = require('fs');

var writeMyHTML = function(fileName, response) {
      fs.readFile(__dirname + fileName, function(err, file) {
        response.write(file);
        response.end(); // fica aqui porque a leitura e' assincrona
      });
}

var workRequest = function(request, response) {
  response.writeHead(200, {'Content-Type':'text/html'});

  var urlResult = url.parse(request.url, true);
  switch (urlResult.pathname) {
    case '/':
      writeMyHTML('/artigos.html', response);
      break;
    case '/artigos':
      writeMyHTML('/artigos.html', response);
      break;
    case '/contato':
      writeMyHTML('/contato.html', response);
      break;
    default:
      writeMyHTML('/erro.html', response);
  }
}

var server = http.createServer(workRequest);

server.listen(3000);
