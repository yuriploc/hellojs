var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write('<h1>dados da query</h1>');

  var result = url.parse(req.url, true);

  for(k in result.query) {
    res.write('<p>'+k+' : '+result.query[k]+'</p>');
  }
  res.end();
});

server.listen(3000);
