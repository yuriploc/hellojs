var fs = require('fs');
fs.readdir(__dirname, function(err, contents) {
  if (err) throw err;
  contents.forEach(function(content) {
    var path = './'+content;
    fs.stat(path, function(err, stat) {
      if (err) throw err;
      if(stat.isFile()) {
        console.log('%s %d bytes', content, stat.size);
      }
    });
  });
});
