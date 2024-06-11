var express = require("express");
var router = express.Router();

var quiz_nbaController = require("../controllers/quiz_nbaController");
const { obterDadosQuizNBA } = require("../models/quiz_nbaModel");


router.post("/cadastrarQtdAcerto_quiz_nba", function(req, res){
    console.log(req.body);
    quiz_nbaController.cadastrarQtdAcerto_quiz_nba(req, res);
    })
    
    router.post("/obterDadosQuizNBA", function (req, res) {
        console.log("rota acessada")
    
        console.log(req.body);
        quiz_nbaController.obterDadosQuizNBA(req, res);
    
    })

module.exports = router;