const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
    serie:{type: String, required: true},
    turno:{type: String, required: true},
    nomeProfessora:{type: String, required: true},
    disciplinas:{type:[String]},
});

module.exports = mongoose.model('Turma', TurmaSchema);