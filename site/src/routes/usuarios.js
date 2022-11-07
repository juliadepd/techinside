var express = require("express"); 
var router = express.Router(); 

var usuarioController = require("../controllers/usuarioController");

// Router para login
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
// Router solicitarUsuario
router.post("/solicitarUsuario", function (req, res) {
    usuarioController.solicitarUsuario(req, res);
});

//listarComp:
router.get("/listarComp/:idEmpresa", function (req, res) {
    usuarioController.listarComp(req, res);
});
//componentes:
router.get("/componentes/:idComputador", function (req, res) {
    usuarioController.componentes(req, res);
});
// Router para cadastroEmpresa
router.post("/cadastrarEmpresa", function (req, res) {
    usuarioController.cadastrarEmpresa(req, res);
});
// Router para setar empresa
router.get("/setEmpresa", function (req, res) {
    usuarioController.setEmpresa(req, res);
});
// Router para cadastoUsuario:
router.post("/cadastroUsuario", function (req, res) {
    usuarioController.cadastroUsuario(req, res);
});
//Listar usuarios:
router.get("/listarUsuarios/:idEmpresa", function (req, res) {
    usuarioController.listarUsuarios(req, res);
});

router.get("/listarFuncionario/:idUsuarioLog", function (req, res) {
    usuarioController.listarFuncionario(req, res);
});

//isAdmin usuarios:
router.get("/isAdmin/:emailUsuarioVar", function (req, res) {
    usuarioController.isAdmin(req, res);
});

//Deletar usuarios:
router.delete("/deletar/:deletUsuarioVar", function (req, res) {
    usuarioController.deletar(req, res);
});

//Gerenciar usuarios:
router.post("/atualizarFuncionario/:idUsuario", function (req, res) {
    usuarioController.atualizarFuncionario(req, res);
});
router.post("/novasenhaUsuario", function (req, res) {
    usuarioController.novasenhaUsuario(req, res);
});
// Router para cadastoMaquina:
router.post("/cadastroMaquina", function (req, res) {
    usuarioController.cadastroMaquina(req, res);
});



module.exports = router;

