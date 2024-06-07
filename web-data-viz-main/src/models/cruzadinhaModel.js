var database = require("../database/config")

function cadastrar_pontos_cruzadinha(idUsuario, pontuacao){
    var instrucaoSql = `INSERT INTO cruzadinha VALUES (default, ${idUsuario}, ${pontuacao});`

    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrar_pontos_cruzadinha
}