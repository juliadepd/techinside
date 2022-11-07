var database = require("../database/config");

function buscarUltimasMedidas(idComputador, fkComponente, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        componente.fkComputador as idComputador,
        valorCapturado as captura, 
        dtaCaptura as dataCaptura
                    from captura
                    join componente on componente.idComponente = captura.fkComponente
                    where fkComponente = ${fkComponente}
                    and fkComputador = ${idComputador}
                    order by dtaCaptura desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico  
                    from medida
                    where fk_aquario = ${idComputador}
                    order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMetricas(idComputador) {
    // let currentDate = new Date().toJSON().slice(0, 10);
    let currentDate = '2022-10-17';

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select avg(valorCapturado) as mediaCaptura, tipoComponente 
                        from captura 
                        join componente on fkComponente = idComponente 
                        and fkComputador = ${idComputador}
                        --and CONVERT(VARCHAR(25), dtaCaptura, 126) like '${currentDate}%'
                        group by tipoComponente;`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico  
                    from medida
                    where fk_aquario = ${idComputador}
                    order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idComputador, fkComponente) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        componente.fkComputador as idComputador,
        valorCapturado as captura, 
        dtaCaptura as dataCaptura
                    from captura
                    join componente on componente.idComponente = captura.fkComponente
                    where fkComponente = ${fkComponente}
                    and fkComputador = ${idComputador}
                    order by dtaCaptura desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idComputador} 
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMetricas
}
