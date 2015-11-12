var fs = require('fs');
var leDiretorio = function() {
  fs.readdir(__dirname, function(err, directory) {
    if (err) return err;
    directory.forEach(function(file) {
      le(file);
    });
  });
}

var le = function(file) {
  var path = './' + file;
  fs.stat(path, function(err, stat) {
    if (err) return err;
    if (stat.isFile()) {
      console.log('%s %d bytes', file, stat.size);
    }
  });
}

leDiretorio();
