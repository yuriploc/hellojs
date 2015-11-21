var express = require('express');
var mySession = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var load = require('express-load');

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(mySession({
  secret: 'keyboard-cat',
  cookie: {}
}));
app.use(bodyParser.json()); // bind json + html
app.use(bodyParser.urlencoded()); // bind json + html em req.body
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000);
module.exports = app;
