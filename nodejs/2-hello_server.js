var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Hi!</h1>");
  console.log('requisição feita');
  res.end();
});

server.listen(3000);
