const Aluno = require('../models/Alunos');

 async function store(req, res){

    const { numeroMatricula, nome, serie, notasDisciplinas, } = req.body
    
    const aluno = await Aluno.create({ numeroMatricula, nome, serie, notasDisciplinas, });

   return res.json(aluno);

}

 function index(req, res){

   // const resultado =  await Aluno.find();
    return res.json(resultado);

}


function update(req, res){
    
    return res.send('Edita um responsável');
}

function destroy(req, res){
    
    return res.send('Edita um responsável');
}


module.exports = { store, index, update, destroy };