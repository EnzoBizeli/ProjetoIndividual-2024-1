var quiz_clippersModel = require("../models/quiz_clippersModel")

function cadastrarQtdAcerto_quiz_clippers(req, res){
    var idUsuario = req.body.idUsuarioServer
    var qtdAcertos = req.body.qtdAcertosServer

    quiz_clippersModel.cadastrarQtdAcerto_quiz_clippers(idUsuario, qtdAcertos).then((resultado) => {
        res.status(200).json(resultado)
    })
}



function obterDadosQuizClippers(req, res) {
    var idUsuario = req.body.idUsuario

    console.log(`Recuperando últimos acertos para o usuário com ID: ${idUsuario}`)


    quiz_clippersModel.obterDadosQuizClippers(idUsuario).then((resultado) => {
        console.log(Object.keys(resultado) + "obterDadosQuizClippers\n\n")
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    })

}



module.exports = {
    cadastrarQtdAcerto_quiz_clippers,
    obterDadosQuizClippers
}