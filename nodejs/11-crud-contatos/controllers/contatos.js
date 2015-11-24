module.exports = function(app) {
  var ContatoController = {
    index: function(req, res) {
      var usuario = req.session.usuario;
      var contatos = usuario.contatos;
      var params = { usuario: usuario
                    , contatos: contatos};
      res.render('contatos/index', params);
    },
    create: function(req, res) {
      var contato = req.body.contato;
      var usuario = req.session.usuario;
      usuario.contatos.push(contato);
      console.log(usuario.valueOf());
      res.redirect('/contatos');
    },
    show: function(req, response) {
      var id = req.params.id;
      var contato = req.session.usuario.contatos[id];
      var contatoOb = {contato: contato, id: id};
      // response.send(contatoOb); // OK
      response.render('contatos/show', contatoOb); // TODO
    },
    edit: function(req, res) {
      var id = req.params.id;
      var usuario = req.session.usuario;
      var contato = usuario.contatos[id];
      var params = {usuario: usuario,
                    contato: contato,
                    id: id};
      res.render('contatos/edit', params);
    },
    update: function(req, res) {
      var contato = req.body.contato;
      var id = req.params.id;
      req.session.usuario.contatos[id] = contato;
      res.redirect('/contatos');
    },
    destroy: function(req, res) {
      var id = req.params.id;
      req.session.usuario.contatos.splice(id, 1);
      res.redirect('/contatos');
    }
  };
  return ContatoController;
};
