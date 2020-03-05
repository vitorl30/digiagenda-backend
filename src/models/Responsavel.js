const mongoose = require('mongoose');

const ResponsavelSchema = new mongoose.Schema({
    nome:{type: String, required: true},
    nomeUsuario:{type: String, required: true},
    senha:{type: String, required: true},
    loginLog:{type: [String]},
    notificacao: [{
      data: {type: Date},
      notificacao: {type: String}
    }],
    createdAt: {type: Date, default: Date.now}
    
});

module.exports = mongoose.model('Responsavel', ResponsavelSchema);