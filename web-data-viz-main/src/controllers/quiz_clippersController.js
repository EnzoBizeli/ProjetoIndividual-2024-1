var quiz_clippersModel = require("../models/quiz_clippersModel")

function cadastrarQtdAcerto_quiz_clippers(req, res){
    var idUsuario = req.body.idUsuarioServer
    var qtdAcertos = req.body.qtdAcertosServer

    quiz_clippersModel.cadastrarQtdAcerto_quiz_clippers(idUsuario, qtdAcertos).then((resultado) => {
        res.status(200).json(resultado)
    })
}


module.exports = {
    cadastrarQtdAcerto_quiz_clippers
}