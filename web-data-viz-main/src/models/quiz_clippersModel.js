var database = require("../database/config")

function cadastrarQtdAcerto_quiz_clippers(idUsuario, qtdAcertos){
    var instrucaoSql = `INSERT INTO quiz_clippers VALUES (default, ${idUsuario}, ${qtdAcertos});`

    return database.executar(instrucaoSql)
}



function obterDadosQuizClippers (idUsuario){
    let instrucaoSql = `SELECT nome, quiz_nba.qtdAcertos FROM quiz_clippers
	                        JOIN usuario 
                            ON idUsuario = fk_usuario
                            WHERE idUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}



module.exports = {
    cadastrarQtdAcerto_quiz_clippers,
    obterDadosQuizClippers
}