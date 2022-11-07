var usuarioModel = require("../models/usuarioModel"); 
//var sessoes = []; 

//Controlle para login
function entrar(req, res) {
    var emailUser = req.body.emailServer;
    var senhaUser = req.body.senhaServer;
    var isAdminUser = req.body.isAdminUserServer;
    if (emailUser == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaUser == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {        
        usuarioModel.entrar(emailUser, senhaUser, isAdminUser)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Ajude-me Obi-Wan Kenobi, pois esse e-mail ou senha não existem.");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
//Controlle para solicitarUsuario
function solicitarUsuario(req, res) {
    var cpfUsuario = req.body.cpfUsuarioServer;
    var emailUsuario = req.body.emailUsuarioServer;
    if (cpfUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (emailUsuario == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {        
        usuarioModel.solicitarUsuario(cpfUsuario, emailUsuario)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        return res.json(resultado[0]);
                        console.log(resultado[0])
                    } else if (resultado.length == 0) {
                        res.status(403).send("Ajude-me Obi-Wan Kenobi, pois esse e-mail ou senha não existem.");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
//Controlle para cadastroEmpresa
function cadastrarEmpresa(req, res) {
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var cnpjEmpresa = req.body.cnpjEmpresaServer;
    var telefoneEmpresa = req.body.telefoneEmpresaServer;
    var emailEmpresa = req.body.emailEmpresaServer;
    

    if (nomeEmpresa == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cnpjEmpresa == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (telefoneEmpresa == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (emailEmpresa == undefined) {
        res.status(400).send("Sua sistemaFav está undefined!");
    }else {        
        usuarioModel.cadastrarEmpresa(nomeEmpresa, cnpjEmpresa, telefoneEmpresa,  emailEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
//Controlle para cadastroUsuario
function cadastroUsuario(req, res) {
    var nomeUsuario = req.body.nomeUsuarioServer;
    var cargoUsuario = req.body.cargoUsuarioServer;
    var setorUsuario = req.body.setorUsuarioServer;
    var emailUsuario = req.body.emailUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;
    var cpfUsuario = req.body.cpfUsuarioServer;
    var fkUsuarioAdmin = req.body.fkUsuarioAdminServer;
    var fkEmpresa = req.body.fkEmpresaServer;
    

    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nomeUsuario está undefined!");
    } else if (cargoUsuario == undefined) {
        res.status(400).send("Seu cargoUsuario está undefined!");
    } else if (setorUsuario == undefined) {
        res.status(400).send("Seu setorUsuario está undefined!");
    } else if (emailUsuario == undefined) {
        res.status(400).send("Sua emailUsuario está undefined!");
    } else if (senhaUsuario == undefined) {
        res.status(400).send("Sua senhaUsuario está undefined!");
    } else if ( cpfUsuario == undefined) {
        res.status(400).send("Sua cpfUsuario está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
    }else {        
        usuarioModel.cadastroUsuario(nomeUsuario, cargoUsuario, setorUsuario, emailUsuario, senhaUsuario, cpfUsuario, fkUsuarioAdmin, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizarFuncionario(req, res) {
    var nomeUsuario = req.body.nomeUsuarioServer;
    var cargoUsuario = req.body.cargoUsuarioServer;
    var setorUsuario = req.body.setorUsuarioServer;
    var emailUsuario = req.body.emailUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;
    var cpfUsuario = req.body.cpfUsuarioServer;
    var idUsuario = req.body.idUsuarioServer;
    var fkUsuarioAdmin = req.body.fkUsuarioAdminServer;
    var fkEmpresa = req.body.fkEmpresaServer;
    

    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nomeUsuario está undefined!");
    } else if (cargoUsuario == undefined) {
        res.status(400).send("Seu cargoUsuario está undefined!");
    } else if (setorUsuario == undefined) {
        res.status(400).send("Seu setorUsuario está undefined!");
    } else if (emailUsuario == undefined) {
        res.status(400).send("Sua emailUsuario está undefined!");
    } else if (senhaUsuario == undefined) {
        res.status(400).send("Sua senhaUsuario está undefined!");
    } else if ( cpfUsuario == undefined) {
        res.status(400).send("Sua cpfUsuario está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
    }else {        
        usuarioModel.atualizarFuncionario(idUsuario, nomeUsuario, cargoUsuario, setorUsuario, emailUsuario, senhaUsuario, cpfUsuario, fkUsuarioAdmin, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// Cadastrar Maquina
function cadastrarMaquina(req, res) {
    var idEmpresa = req.body.idEmpresaServer;
    var idUsuario = req.params.idUsuarioServer;
    var marcaMaquina = req.body.marcaMaquinaServer;
    var modeloMaquina = req.body.modeloMaquinaServer;
    var serialNumberMaquina = req.body.serialNumberMaquinaServer;
    var usoCpu = req.body.usoCpuServer;
    var temperaturaCpu = req.body.temperaturaCpuServer;
    var usoRam = req.body.usoRamServer;
    

    if (marcaMaquina == undefined) {
        res.status(400).send("Sua marca da maquina está undefined!");
    } else if (modeloMaquina == undefined) {
        res.status(400).send("Seu modelo de maquina está undefined!");
    } else if (serialNumberMaquina == undefined) {
        res.status(400).send("Seu serial number da maquina está undefined!");
    } else if (usoCpu == undefined) {
        res.status(400).send("Seu usoCpu está undefined!");
    } else if (temperaturaCpu == undefined) {
        res.status(400).send("Sua temperaturaCpu está undefined!");
    } else if ( usoRam == undefined) {
        res.status(400).send("Seu usoRam está undefined!");
    }else {        
        usuarioModel.cadastrarMaquina(idEmpresa, idUsuario,marcaMaquina, modeloMaquina, serialNumberMaquina, usoCpu, temperaturaCpu, usoRam)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de máquina! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


// Controller para set empresa:
function setEmpresa(req, res) {
    
    usuarioModel.setEmpresa()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// Listar usuarios:
function listarUsuarios(req, res) {
    var varIdEmpresa = req.params.idEmpresa;
    usuarioModel.listarUsuarios(varIdEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarFuncionario(req, res) {
    var varIdUsuario = req.params.idUsuarioLog;
    usuarioModel.listarFuncionario(varIdUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarComp(req, res) {
    var varIdEmpresa = req.params.idEmpresa;
    
    usuarioModel.listarComp(varIdEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function componentes(req, res) {
    var varIdComputador = req.params.idComputador;
    
    usuarioModel.componentes(varIdComputador)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// isAdmin usuarios:
function isAdmin(req, res) {
    var emailUsuario = req.params.emailUsuarioVar;
    usuarioModel.isAdmin(emailUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
//Deletar Usuario:
function deletar(req, res) {
    var deletUsuario = req.params.deletUsuarioVar;

    usuarioModel.deletar(deletUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function novasenhaUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

  
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.novasenhaUsuario(email, senha)
            .then(
                function (resultado) {
                  res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao atualizar senha! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}




module.exports = {
    entrar,
    cadastrarEmpresa,
    setEmpresa,
    cadastroUsuario,
    novasenhaUsuario,
    solicitarUsuario,
    listarUsuarios,
    listarComp,
    componentes,
    isAdmin,
    deletar,
    atualizarFuncionario,
    cadastrarMaquina,
    listarFuncionario
}