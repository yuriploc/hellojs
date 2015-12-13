var express = require("express");
var app = express();

app.use(require("body-parser").json());

var knexfile = require("./knexfile");
var knex = require("knex")(knexfile.development);

knex.migrate.latest();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.get("/list",function(req,res){
  knex("mensagem").select().then(function(ret){
    res.json(ret);
  }).catch(function(err){
    res.status(500).send(err);
    console.log(err);
  });
});

app.post("/save",function(req,res){
  var mensagem = req.body;
  knex("mensagem").insert(mensagem,"idmensagem").then(function(ret){
    mensagem.idmensagem = ret[0];
    res.json(mensagem);
  });
});

app.put("/save",function(req,res){
  var mensagem = req.body
  knex("mensagem").update(mensagem).where({
    idmensagem:mensagem.idmensagem
  }).then(function(ret){
    res.json(mensagem);
  }).catch(function(err){
    res.status(500).send(err)
    console.log(err);
  });
});

app["delete"]("/:idmensagem",function(req,res){
  knex("mensagem").delete().where({
    idmensagem:req.params.idmensagem
  }).then(function(ret){
    res.send("OK");
  }).catch(function(err){
    res.status(500).send(err)
    console.log(err);
  });
});

app.use(express.static("www"));

app.listen(3000);
