var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mySession = require('express-session');
var methodOverride = require('method-override');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('keyboard-cat'));
app.use(mySession({
  secret: 'keyboard-cat',
  key: 'ntalk.sid',
  resave:false,
  saveUninitialized: false,
  maxAge: 3600000
}));
app.use(bodyParser.json()); // bind json + html
app.use(bodyParser.urlencoded({extended: true})); // bind json + html em req.body
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000);
module.exports = app;
