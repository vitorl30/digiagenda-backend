const mongoose = require('mongoose');

const AlunosSchema = new mongoose.Schema({
    numeroMatricula:{type: String, required: true},
    nome:{type: String, required: true},
    serie:{type: String, required: true},
    notasDisciplinas:{type: [{
        nomeDisciplina: {type: String},
        nota1: {type: Number},
        nota2: {type: Number},
        nota3: {type: Number},
        nota4: {type: Number},
        recuperacao1: {type: Number},
        recuperacao1: {type: Number},

    }]}, //Tem que buscar na turma
    avisoAluno: [{
        titulo: String,
        dataDoAviso:{type: Date, default: Date.now},
        dataDoAcontecimento: Number,
        conteudo: String,
        lido:Boolean
    }],
    createdAt: {type: Date, default: Date.now}
    
});

module.exports = mongoose.model('Alunos', AlunosSchema);