var db = require('mongoose-simpledb').db;

exports.find = function(name,callback){
	if(name == "all"){
		db.Monster.find({},function(err,result){
			if(err) return console.error(err);
			//console.log(result);
			callback && callback(result);
		});
	}else{
		db.Monster.find({'name':name},function(err,result){
			if(err) return console.error(err);
			//console.log(result);
			callback && callback(result);
		});
	}
}

exports.save = function(monsterJson){
	//console.log("exports.save");
	//console.log(monsterJson[0].name);
	var monster = new db.Monster({
		name: monsterJson[0].name,
		abilities: monsterJson[0].abilitiy,
		height: monsterJson[0].height,
		weight: monsterJson[0].weight
	});
	monster.save();

}