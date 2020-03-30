const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration. development);

module.exports = connection;

/*
SQL: MySQL, SQLite, Oracle,etc
Driver: SELECT * FROM users
Query build: table('users').select('*').where()

instalado o knex + sqlite3

npx - executar pacote
npm - instalar pacote

npx knex init - arquivo na raiz do projeto, configurações de acesso ao banco de dados pra cada ambiente da aplicação
*/
