const express = require('express');
const routes = express.Router();

const Responsavel = require('./controller/Responsavel')
const Aluno = require('./controller/Aluno')


routes.post('/responsavel', Responsavel.store);
routes.get('/responsavel', Responsavel.index);

routes.post('/aluno', Aluno.store);
routes.get('/aluno', Aluno.index);

module.exports = routes;