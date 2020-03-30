const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

/*
Rota - refere-se a alguma entidade que ira ser acessada pelo método HTTP GET - "/" significa a rota raiz 
Recurso - entidade ou tabela que buscamos os dados
*/

/*
Métodos HTTP:

GET: buscar/listar uma informação no backend
POST: ciar uma informção no backend
PUT: alterar uma informação no backend
DELETE: deletar uma informação no backend
*/

/*
Tipos de parâmetros:

Query params: parametros nomeados enviados na rota após "?" na URL (flitros, paginação) - ex: http://localhost:3333/users?name=rod&page=2
Routes params: parametros utilizados para identificar recursos - ex: http://localhost:3333/users/:id
Request Body: corpo da requisição utilizado para criar ou alterar recursos
*/

/*
Configurar nodemon:
npm install nodemon -D na pasta backend
npm start - iniciar o servidor
*/

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
routes.delete('/ongs/:id', ongController.delete);

routes.post('/sessions', sessionController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes; //exportar um variavel de dentro de um arquivo para outro