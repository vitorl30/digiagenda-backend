const Aluno = require('../models/Alunos');

 async function store(req, res){

    const { numeroMatricula, nome, serie, notasDisciplinas, } = req.body
    
    const aluno = await Aluno.create({ numeroMatricula, nome, serie, notasDisciplinas, });

   return res.json(aluno);

}

async function index(req, res){
    const aluno =  req.query.buscaAluno;
    //const aluno = buscaAluno;

    function pesquisaAluno(aluno){
        if(!aluno){
            return  Aluno.find();
        } else{
            const nome = new RegExp(aluno, 'i')
            return  Aluno.find({nome});
        }
    }

    const resultado = await pesquisaAluno(aluno)
    return res.json(resultado);

}


function update(req, res){
    
    return res.send('Edita um responsável');
}

function destroy(req, res){
    
    return res.send('Edita um responsável');
}


module.exports = { store, index, update, destroy };