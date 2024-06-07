var cruzadinhaModel = require("../models/cruzadinhaModel")

function cadastrar_pontos_cruzadinha(req, res){
    var idUsuario = req.body.idUsuarioServer
    var pontuacao = req.body.pontuacaoServer

    cruzadinhaModel.cadastrar_pontos_cruzadinha(idUsuario, pontuacao).then((resultado) => {
        res.status(200).json(resultado)
    })
}

module.exports = {
    cadastrar_pontos_cruzadinha
}