var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:16016/consultas")
    .then(dados=>{
      res.render('listaDB', { tratamentos: dados.data });
    })
    .catch(erro=>{
    
      res.render('error', { error: erro,message:"Erro a obter lista de tratamentos" });
    })
});



router.get('/intervencoes/:id', function(req, res, next) {
  axios.get("http://localhost:16016/consultas")
    .then(dados=>{
      res.render('intervencoes', { tratamentos: dados.data,code:req.params.id });
    })
    .catch(erro=>{
    
      res.render('error', { error: erro,message:"Erro a obter lista de tratamentos" });
    })
});

router.get('/:id', function(req, res, next) {
  axios.get("http://localhost:16016/consultas/"+req.params.id)
      .then(dados=>{
        //console.log(JSON.stringify(dados))
        res.render('perfil', { tratamento: dados.data });
      })
      .catch(erro=>{
      res.render('error', { error: erro,message:"Erro a obter lista de exames" });
      })

  
});

module.exports = router;
