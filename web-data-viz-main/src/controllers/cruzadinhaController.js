var cruzadinhaModel = require("../models/cruzadinhaModel")

function cadastrar_pontos_cruzadinha(req, res){
    var idUsuario = req.body.idUsuarioServer
    var pontuacao = req.body.pontuacaoServer

    cruzadinhaModel.cadastrar_pontos_cruzadinha(idUsuario, pontuacao).then((resultado) => {
        res.status(200).json(resultado)
    })
}



function obterDadosCruzadinha(req, res) {
    var idUsuario = req.body.idUsuario

    console.log(`Recuperando últimos acertos para o usuário com ID: ${idUsuario}`)


    cruzadinhaModel.obterDadosCruzadinha(idUsuario).then((resultado) => {
        console.log(Object.keys(resultado) + "obterDadosCruzadinha\n\n")
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    })

}



module.exports = {
    cadastrar_pontos_cruzadinha,
    obterDadosCruzadinha
}