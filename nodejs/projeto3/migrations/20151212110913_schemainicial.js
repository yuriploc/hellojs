
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("mensagem",function(table){
    table.increments("idmensagem");
    table.string("nomeMensagem");
    table.string("corpoMensagem");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("mensagem");
};
