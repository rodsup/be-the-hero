const express = require('express'); //essa variavel importa e contem todas as funcionalidades do módulo express
const cors = require('cors');
const routes = require('./routes'); //importar variavel routes do routes.js

const app = express();


app.use(cors()); //limitar o acesso da aplicação a um dominio
app.use(express.json()); //converter o request body para json
app.use(routes);

app.listen(3333); //coloca o app no localhost:3333 - porta padrão para node.js
