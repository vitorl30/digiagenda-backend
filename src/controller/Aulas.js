function index(req, res){
    const aula = {
        id:"1",
        titulo:"Titulo da aula",
        descricao:"A certificação de metodologias que nos auxiliam a lidar com a competitividade nas transações comerciais obstaculiza a apreciação da importância de todos os recursos funcionais envolvidos.",
        video:"TblrUxi2AOY"
    };

    res.json(aula);
}

module.exports = {index} 