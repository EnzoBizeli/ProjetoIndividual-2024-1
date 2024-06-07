var express = require("express");
var router = express.Router();

var cruzadinhaController = require("../controllers/cruzadinhaController")

router.post("/cadastrar_pontos_cruzadinha", function(req, res){
    console.log(req.body);
    cruzadinhaController.cadastrar_pontos_cruzadinha(req, res);
})

module.exports = router;