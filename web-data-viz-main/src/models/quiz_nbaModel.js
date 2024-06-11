var database = require("../database/config")

function cadastrarQtdAcerto_quiz_nba(idUsuario, qtdAcertos){
    var instrucaoSql = `INSERT INTO quiz_nba VALUES (default, ${idUsuario}, ${qtdAcertos});`

    return database.executar(instrucaoSql)
}

function obterDadosQuizNBA (idUsuario){
    let instrucaoSql = `SELECT nome, quiz_nba.qtdAcertos FROM quiz_nba
	                        JOIN usuario 
                            ON idUsuario = fk_usuario
                            WHERE idUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrarQtdAcerto_quiz_nba,
    obterDadosQuizNBA
}