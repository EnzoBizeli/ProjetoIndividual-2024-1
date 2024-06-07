var database = require("../database/config")

function cadastrarQtdAcerto_quiz_clippers(idUsuario, qtdAcertos){
    var instrucaoSql = `INSERT INTO quiz_clippers VALUES (default, ${idUsuario}, ${qtdAcertos});`

    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrarQtdAcerto_quiz_clippers
}