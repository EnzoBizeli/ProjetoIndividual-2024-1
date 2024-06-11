var quiz_nbaModel = require("../models/quiz_nbaModel")

function cadastrarQtdAcerto_quiz_nba(req, res) {
    var idUsuario = req.body.idUsuarioServer
    var qtdAcertos = req.body.qtdAcertosServer
    console.log("entre aspas")

    quiz_nbaModel.cadastrarQtdAcerto_quiz_nba(idUsuario, qtdAcertos).then((resultado) => {
        res.status(200).send("cadastrado quiz!")
    })
}

function obterDadosQuizNBA(req, res) {
    var idUsuario = req.body.idUsuario

    console.log(`Recuperando últimos acertos para o usuário com ID: ${idUsuario}`)


    quiz_nbaModel.obterDadosQuizNBA(idUsuario).then((resultado) => {
        console.log(resultado + "obterDadosQuizNBA\n\n")
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    })

}


module.exports = {
    cadastrarQtdAcerto_quiz_nba,
    obterDadosQuizNBA
}