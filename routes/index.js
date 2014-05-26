var express = require('express');
var router = express.Router();
var CRUD = require('../models/crud');


/* GET home page. */
router.get('/', function(req, res) {
  	res.render('index', { title: 'Express' });
});

router.post('/save',function(req,res){
	//console.log(req.body);
	CRUD.save(req.body);
});

router.get('/find',function(req,res){
	var name = req.query.monsterName;

	CRUD.find(name,function(result){
		res.send(result);
	})
});

module.exports = router;
