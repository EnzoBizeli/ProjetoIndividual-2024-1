var express = require("express");
var router = express.Router();

var quiz_nbaController = require("../controllers/quiz_nbaController")

router.post("/cadastrarQtdAcerto_quiz_nba", function(req, res){
    console.log(req.body);
    quiz_nbaController.cadastrarQtdAcerto_quiz_nba(req, res);
})

module.exports = router;