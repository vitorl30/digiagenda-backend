const express = require('express');
const routes = express.Router();

const Responsavel = require('./controller/Responsavel')
const Aluno = require('./controller/Aluno')
const Aulas = require('./controller/Aulas')


routes.post('/responsavel', Responsavel.store);
routes.get('/responsavel', Responsavel.index);

routes.post('/aluno', Aluno.store);
routes.get('/aluno', Aluno.index);

routes.get('/aulas/alfaeomega/5ano/1', Aulas.index);

module.exports = routes;