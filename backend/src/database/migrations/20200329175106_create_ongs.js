exports.up = function(knex) { //metodo up vai criar dados na tabela
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary(); //chave primaria
      table.string('name').notNullable(); //valor não pode ser nulo
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); //limita o texto para dois caracteres
  });
}; 

exports.down = function(knex) { //desfazer alguma tabela devido erros
  return knex.schema.dropTable('ongs');
};
