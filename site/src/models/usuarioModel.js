var database = require("../database/config")
 
//Model para login
function entrar(emailUser, senhaUser, isAdminUser) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailUser, senhaUser, isAdminUser)
  //Conexão DEV
  // var instrucao = `
  // SELECT * from usuario where emailUser = '${emailUser}' and aes_decrypt(senhaUser,'TechInside') = '${senhaUser}' and userAdmin ${isAdminUser};
  // `;

  //Conexão PROD
  var instrucao = `
  SELECT * FROM USUARIO WHERE CONVERT(VARCHAR(MAX), decryptbypassphrase('TechInside', senhaUser)) = '${senhaUser}' and emailUser = '${emailUser}' and userAdmin ${isAdminUser};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

//Model para solicitarUsuario
function solicitarUsuario(cpfUsuario, emailUsuario) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cpfUsuario, emailUsuario)
  var instrucao = `
  SELECT * FROM usuario WHERE emailUser = '${emailUsuario}' AND cpfUser = '${cpfUsuario}';
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
//Model para cadastroEmpresa
function cadastrarEmpresa(nomeEmpresa, cnpjEmpresa, telefoneEmpresa,  emailEmpresa) {
    console.log(`ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> 
    verifique suas credenciais de acesso ao banco\n \t\t >> 
    e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():`, nomeEmpresa, cnpjEmpresa, telefoneEmpresa,  emailEmpresa);
    
    var instrucao = `
        INSERT INTO empresa (nomeEmpresa, cnpjEmpresa, telefoneEmpresa, emailEmpresa) VALUES ('${nomeEmpresa}', '${cnpjEmpresa}', ${telefoneEmpresa}, '${emailEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao); 
    return database.executar(instrucao);
}
// Model para cadastroUsuario
function cadastroUsuario(nomeUsuario, cargoUsuario, setorUsuario, emailUsuario, senhaUsuario, cpfUsuario, fkUsuarioAdmin, fkEmpresa) {
  console.log(`ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> 
  verifique suas credenciais de acesso ao banco\n \t\t >> 
  e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():`, nomeUsuario, cargoUsuario, setorUsuario, emailUsuario, senhaUsuario, cpfUsuario, fkUsuarioAdmin, fkEmpresa);
  //  Conexão DEV
  // var instrucao = `
  //     INSERT INTO usuario (nomeUser, cargoUser, setorUser, cpfUser, emailUser, senhaUser, userAdmin, fkEmpresa) VALUES ('${nomeUsuario}', '${cargoUsuario}', '${setorUsuario}', '${cpfUsuario}', '${emailUsuario}', aes_encrypt('${senhaUsuario}','TechInside'), ${fkUsuarioAdmin}, ${fkEmpresa});
  // `;

  // Conexão PROD
  var instrucao = `
      INSERT INTO usuario (nomeUser, cargoUser, setorUser, cpfUser, emailUser, senhaUser, userAdmin, fkEmpresa) VALUES ('${nomeUsuario}', '${cargoUsuario}', '${setorUsuario}', '${cpfUsuario}', '${emailUsuario}',encryptbypassphrase('TechInside', '${senhaUsuario}'), ${fkUsuarioAdmin}, ${fkEmpresa});
  `;
  console.log("Executando a instrução SQL: \n" + instrucao); 
  return database.executar(instrucao); 
}

function atualizarFuncionario(idFuncionario, nomeUsuario, cargoUsuario, setorUsuario, emailUsuario, senhaUsuario, cpfUsuario, fkUsuarioAdmin, fkEmpresa) {
  console.log(`ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> 
  verifique suas credenciais de acesso ao banco\n \t\t >> 
  e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():`, nomeUsuario, cargoUsuario, setorUsuario, emailUsuario, senhaUsuario, cpfUsuario, fkUsuarioAdmin, fkEmpresa);
  // Conexão DEV
  // var instrucao = `
  //     UPDATE usuario SET nomeUser = '${nomeUsuario}' where idUsuario = ${idFuncionario};
  //     UPDATE usuario SET cargoUser = '${cargoUsuario}' where idUsuario = ${idFuncionario};
  //     UPDATE usuario SET setorUser = '${setorUsuario}' where idUsuario = ${idFuncionario};
  //     UPDATE usuario SET cpfUser = '${cpfUsuario}' where idUsuario = ${idFuncionario};
  //     UPDATE usuario SET emailUser = '${emailUsuario}' where idUsuario = ${idFuncionario};
  //     UPDATE usuario SET senhaUser = aes_encrypt('${senhaUsuario}','TechInside') where idUsuario = ${idFuncionario};
  //     UPDATE usuario SET userAdmin = ${fkUsuarioAdmin} where idUsuario = ${idFuncionario};
  //     UPDATE usuario SET fkEmpresa = '${fkEmpresa}' where idUsuario = ${idFuncionario};
  // `;

  // Conexão PROD
  var instrucao = `
  UPDATE usuario SET nomeUser = '${nomeUsuario}' where idUsuario = ${idFuncionario};
  UPDATE usuario SET cargoUser = '${cargoUsuario}' where idUsuario = ${idFuncionario};
  UPDATE usuario SET setorUser = '${setorUsuario}' where idUsuario = ${idFuncionario};
  UPDATE usuario SET cpfUser = '${cpfUsuario}' where idUsuario = ${idFuncionario};
  UPDATE usuario SET emailUser = '${emailUsuario}' where idUsuario = ${idFuncionario};
  UPDATE usuario SET senhaUser = encryptbypassphrase('TechInside', '${senhaUsuario}') where idUsuario = ${idFuncionario};
  UPDATE usuario SET userAdmin = ${fkUsuarioAdmin} where idUsuario = ${idFuncionario};
  UPDATE usuario SET fkEmpresa = '${fkEmpresa}' where idUsuario = ${idFuncionario};
`;
  console.log("Executando a instrução SQL: \n" + instrucao); 
  return database.executar(instrucao); 
}

function cadastrarMaquina(idEmpresa, idUsuario,marcaMaquina, modeloMaquina, serialNumberMaquina, usoCpu, temperaturaCpu, usoRam) {
  console.log(`ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> 
  verifique suas credenciais de acesso ao banco\n \t\t >> 
  e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():`,idEmpresa, idUsuario, marcaMaquina, modeloMaquina, serialNumberMaquina, usoCpu, temperaturaCpu, usoRam);
  // Conexão DEV
  // var instrucao = `

  // `;

  // Conexão PROD
  var instrucao = `
  insert into computador (marca, modelo, numSerial, fkUsuario, fkEmpresa) values ('${marcaMaquina}','${modeloMaquina}','${serialNumberMaquina}',${idUsuario},${idEmpresa});
  insert into componente (tipoComponente, unidadeMedidaComponente, capacidadeComponente, triggerMax, triggerMin, fkComputador) values ('usoRam',null , null, 70.00, 20.00, 7);
  
`;
  console.log("Executando a instrução SQL: \n" + instrucao); 
  return database.executar(instrucao); 
}

function listarFuncionario(idFuncionario) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM usuario WHERE idUsuario = ${idFuncionario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// SetEmpresa:
function setEmpresa() {
    console.log(
      "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
    );
    var instrucao = `
      SELECT TOP 1 * FROM empresa ORDER BY idEmpresa DESC;
          
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

function novasenhaUsuario(email, senha) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function validSenha():", senha);
  // Conexão DEV
  // var instrucao = `
  // update usuario set senhaUser = aes_encrypt('${senha}','TechInside') where emailUser ='${email}';
  // `;

  // Conexão PROD
  var instrucao = `
  UPDATE usuario SET senhaUser = encryptbypassphrase('TechInside', '${senha}') where emailUser = '${email}';
  `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
//Listar Usuarios:
function listarUsuarios(idEmpresa) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        
        SELECT * FROM usuario WHERE fkEmpresa = ${idEmpresa} order by userAdmin;
        
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
//Listar computador:
function listarComp(varIdEmpresa) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        
        SELECT * FROM computador WHERE fkEmpresa = ${varIdEmpresa};
        
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
//Componentes:
function componentes(varIdComputador) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        
        SELECT * FROM componente WHERE fkComputador = ${varIdComputador};
        
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
//isAdmin:
function isAdmin(emailUsuario) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        
        SELECT * FROM usuario WHERE emailUser = '${emailUsuario}';
        
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
//Deletar usuario:
function deletar(deletUsuario) {
  console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", deletUsuario);
  var instrucao = `
    delete from computador where fkUsuario = ${deletUsuario};
    DELETE FROM usuario WHERE idUsuario = ${deletUsuario};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = { 
    entrar,
    cadastrarEmpresa,
    cadastroUsuario,
    setEmpresa,
    novasenhaUsuario,
    solicitarUsuario,
    listarUsuarios,
    listarComp,
    componentes,
    isAdmin,
    deletar,
    listarFuncionario,
    atualizarFuncionario,
    cadastrarMaquina
};