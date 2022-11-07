var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idComputador/:fkComponente", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimas-metricas/:idComputador", function (req, res) {
    medidaController.buscarMetricas(req, res);
});


router.get("/tempo-real/:idComputador/:fkComponente", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;