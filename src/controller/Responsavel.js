const Responsavel = require('../models/Responsavel');

async function store(req, res){

    const {nome, nomeUsuario, senha} = req.body
    
   const responsavel = await Responsavel.create({ nome, nomeUsuario, senha});
   return res.json(responsavel);

}

async function index(req, res){

    const resultado =  await Responsavel.find();
    return res.json(resultado);

}


function update(req, res){
    
    return res.send('Edita um responsável');
}

function destroy(req, res){
    
    return res.send('Edita um responsável');
}


module.exports = { store, index, update, destroy };