var quiz_nbaModel = require("../models/quiz_nbaModel")

function cadastrarQtdAcerto_quiz_nba(req, res){
    var idUsuario = req.body.idUsuarioServer
    var qtdAcertos = req.body.qtdAcertosServer

    quiz_nbaModel.cadastrarQtdAcerto_quiz_nba(idUsuario, qtdAcertos).then((resultado) => {
        res.status(200).json(resultado)
    })
}


module.exports = {
    cadastrarQtdAcerto_quiz_nba
}