
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); //id para casos se gerado um incremento numerico 1 += 1
        table.string('title').notNullable(); //valor não pode ser nulo
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //é necessario que uma ong (id) faça o cadastro de casos

        table.foreign('ong_id').references('id').inTable('ongs'); //a coluna ong_id da tabela incidents referencia a coluna id na tabale ongs
    });
   
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
