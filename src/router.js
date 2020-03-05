const express = require('express');
const routes = express.Router();

const Responsavel = require('./controller/Responsavel')

routes.post('/responsavel', Responsavel.store);
routes.get('/responsavel', Responsavel.index);


module.exports = routes;