var express = require('express');
var router = express.Router();
var config = require('./configuracoes');


function execNormalRequest(req, res){
		//res.send(config.options);
		config.request(config.options, function(error, response,body){
			config.options.url = config.defaultUrl;
			if(!error && response.statusCode === 200){
				res.send(body);
			}else{
				res.send(error);
			}

		});
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Node.js based RSS reader',
    newsi: JSON.stringify([{nome:"Guilherme"}, {nome: "Edgard"}])
  });
});

router.post('/candidatos', function(req, res){
	var filtro = req.body;
	if(filtro.estado && filtro.partido && filtro.cargo){
		var estado = filtro.estado.toUpperCase();
		var partido = filtro.partido.toUpperCase();
		var cargo = filtro.cargo.toUpperCase();
		config.options.url += 'candidatos?estado='+ estado + '&partido='+partido+'&cargo='+ cargo + '&_limit=500';
		execNormalRequest(req, res);		
		
	}

});

router.get('candidatos/:id', function(req, res){
	var id = req.params.id;
	if(id){
		config.options.url += 'candidatos/'+id
		execNormalRequest(req, res);
	}
});

router.get('candidatos/:id/bens', function(req, res){
	var id = req.params.id;
	if(id){
		config.options.url += 'candidatos/'+id+'/bens'
		execNormalRequest(req, res);
	}
});

router.get('/cargos', function(req, res){
	config.options.url += 'cargos'
	execNormalRequest(req, res);

});

router.get('/estados', function(req, res){

		config.options.url += 'estados';
		execNormalRequest(req, res);

});

router.get('/partidos', function(req, res){
	config.options.url += 'partidos';
	execNormalRequest(req, res);
});

module.exports = router;
