/*
By Justin Dyson
SDI Assignment 3
Term 1401
Completed: 01/23/14
*/

var handleData = function (json) {
	for (i = 0; i < json.pokemon.length; i++) {
		var pokemon = json.pokemon[i];
		console.log("Name: " + pokemon.name + ", hit points: " + pokemon.hp + ", list of attacks: " + pokemon.attackList); 	
	};
};

handleData(json);