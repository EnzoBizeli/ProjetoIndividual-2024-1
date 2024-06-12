var express = require("express");
var router = express.Router();

var quiz_clippersController = require("../controllers/quiz_clippersController")

router.post("/cadastrarQtdAcerto_quiz_clippers", function(req, res){
    console.log(req.body);
    quiz_clippersController.cadastrarQtdAcerto_quiz_clippers(req, res);
})


router.post("/obterDadosQuizClippers", function (req, res) {
    console.log("rota acessada")

    console.log(req.body);
    quiz_nbaController.obterDadosQuizClippers(req, res);

})

module.exports = router;