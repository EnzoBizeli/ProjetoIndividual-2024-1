var database = require("../database/config")

function cadastrar_pontos_cruzadinha(idUsuario, pontuacao){
    var instrucaoSql = `INSERT INTO cruzadinha VALUES (default, ${idUsuario}, ${pontuacao});`

    return database.executar(instrucaoSql)
}



function obterDadosCruzadinha (idUsuario){
    let instrucaoSql = `SELECT nome, pontuacao FROM cruzadinha
	                        JOIN usuario 
                            ON idUsuario = fk_usuario
                            WHERE idUsuario = ${idUsuario};`

    return database.executar(instrucaoSql)
}



module.exports = {
    cadastrar_pontos_cruzadinha,
    obterDadosCruzadinha
}