var http = require('http');

var pegaRequest = function(req, res) {
  res.writeHead(200, {"Content-Type":"text/html"});
  switch (req.url) {
    case '/':
      res.write('<h1>página inicial</h1>');
      break;
    case '/oi':
      res.write('<h1>Oi :)</h1>');
      break;
    default:
      res.write('PAGE NOT FOUND, LAMMER');
  }
  res.end();
}

var server = http.createServer(pegaRequest);

server.listen(3000, function(){console.log('up!');});
