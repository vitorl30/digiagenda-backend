const express = require('express');
const app = express();
const routes = require('./router');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://digiagenda:swuhethUdusayac5xamu@digiagenda-6ilvc.mongodb.net/digiagenda?retryWrites=true', {
  useNewUrlParser:true,
  useUnifiedTopology:true,
});
'mongodb+srv://digiagenda-6ilvc.mongodb.net/test" --username digiagenda'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectou no banco")
});

app.use(express.json());
app.use(routes);

app.listen(3333, function () {
  console.log('Servidor Rodando na porta 3333');
});