/*
By Justin Dyson
SDI Assignment 3
Term 1401
Completed: 01/23/14
*/



// Global Variables
var numberOfMyPokemon = pokedex.myPokemon.length;	// number of pokemon that are on PokeBelt
var chosenPokemon = "";	// holds string for pokemon chosen by user
var pokemonName; // returned string for showStats function
var changePokemon = true; // boolean for confirm() after showStats function

// Functions

var showStats = function (pokemon) {		// shows stats for pokemon chosen by user, string is passed in
	for (i = 0; i < pokedex.myPokemon.length; i++) {
		if (pokemon === pokedex.myPokemon[i].name) {
			console.log("---");
			console.log("Pokemon Name: " + pokedex.myPokemon[i].name);
			console.log("Total HP: " + pokedex.myPokemon[i].hp);
			console.log("Attacks:");
			console.log(pokedex.myPokemon[i].attackList[0] + ": " + pokedex.myPokemon[i].attackDescription[0] );
			console.log(pokedex.myPokemon[i].attackList[1] + ": " + pokedex.myPokemon[i].attackDescription[1] );
			console.log(pokedex.myPokemon[i].attackList[2] + ": " + pokedex.myPokemon[i].attackDescription[2] );
		};
	};

	return pokemon; // returns string of pokemonName
};


// Main Code

console.log("Wild Bulbasaur attacks!");

console.log("You have " + numberOfMyPokemon + " Pokemon on your PokeBelt!" );

chosenPokemon = prompt("Choose one of your Pokemon to view their stats.", "Charmander, Pickachu, Squirtle");

pokemonName = showStats(chosenPokemon);		// displays stats for pokemon(string) passed in from user prompt

changePokemon = confirm("Do you want to use " + pokemonName + "?");





//console.log(numberOfMyPokemon);







// EXAMPLE CODE
/*
for (i = 0; i < json.pokemon.length; i++) {
	var myPokemon = [];
	 
	while (json.pokemon[i].onBelt) {
		myPokemon.push(json.pokemon[i].name);
		i++;
	};
	
	
	console.log("My Pokemon are " + myPokemon);
	
};

*/