var database = require("../database/config")

function cadastrarQtdAcerto_quiz_nba(idUsuario, qtdAcertos){
    var instrucaoSql = `INSERT INTO quiz_nba VALUES (default, ${idUsuario}, ${qtdAcertos});`

    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrarQtdAcerto_quiz_nba
}