
$(function(){
	$("button[name='save']").on('click',onSaveClick);
	$("button[name='find']").on('click',onFindClick);

})
function onSaveClick(){
	var name = $("input[name='name']").val();
	var abilitiy = $("input[name='abilitiy']").val();
	var height = $("input[name='height']").val();
	var weight = $("input[name='weight']").val();

	var monsterArray = [];
	monsterArray.push({
		name:name,
		abilitiy:abilitiy,
		height:height,
		weight:weight
	});

	ajax_save(monsterArray);
}
function onFindClick(){
	var name = $("input[name='findName']").val();
	ajax_find(name);
}

function ajax_save(monsterArray){
	//console.log(monsterArray);
	var monsterJson = JSON.stringify(monsterArray);
	//console.log(monsterJson);
	$.ajax({
		url: 'http://localhost:3000/save',
		type: 'POST',
		contentType: 'application/json; charset=UTF-8',
		data: monsterJson,
		success: function(result){
			alert(result);
		},
		error: function(xhr,status){
			
			alert(xhr);
		}
	});
}

function ajax_find(monsterName){
	$.ajax({
		url: 'http://localhost:3000/find',
		type: 'GET',
		data:{
			monsterName:monsterName
		},
		success: function(result){
			alert(result.length);
			addFindTable(result);
		},
		error: function(xhr,status){
			alert(xhr);
		}
	});
}

function addFindTable(result){
	$("table[name='findTable']").find("tr:gt(0)").remove();

	for(var i=0;i<result.length;i++){
		$("table[name='findTable'] tbody").append(
			"<tr>"+
			"<td>"+result[i].name+"</td>"+
			"<td>"+result[i].abilities+"</td>"+
			"<td>"+result[i].height+"</td>"+
			"<td>"+result[i].weight+"</td>"+
			"</tr>"
		);
	}
}













































