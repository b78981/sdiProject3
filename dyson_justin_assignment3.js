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
var changePokemon = false; // boolean for confirm() after showStats function
var attackOrThrow; // string for user decision to attack bulbasuar or throw a pokeball

// Functions

var showStats = function (pokemon) {		// shows stats for pokemon chosen by user, string is passed in
	for (i = 0; i < pokedex.myPokemon.length; i++) {
		if (pokemon === pokedex.myPokemon[i].name) {
			console.log("---");
			console.log("Pokemon Name: " + pokedex.myPokemon[i].name);
			console.log("Total HP: " + pokedex.myPokemon[i].hp);
			console.log("Attacks:");
			console.log(pokedex.myPokemon[i].attackList[0] + ": " + pokedex.myPokemon[i].attackDescription[0] );	// INSERT NESTED CONDITIONAL
			console.log(pokedex.myPokemon[i].attackList[1] + ": " + pokedex.myPokemon[i].attackDescription[1] );
			console.log(pokedex.myPokemon[i].attackList[2] + ": " + pokedex.myPokemon[i].attackDescription[2] );
		};
	};

	return pokemon; // returns string of pokemonName
};


var attackPoke = function (/*pickachu, charmander, squirtle, pickaDamage, charDamage, SquirtDamage,*/ pokemonName) {
	var attackName; 
	var pickachu = pokedex.myPokemon[0].attackList;
	var charmander = pokedex.myPokemon[1].attackList;
	var squirtle = pokedex.myPokemon[2].attackList;
	var pickaDamage = pokedex.myPokemon[0].attackPoints;
	var charDamage = pokedex.myPokemon[1].attackPoints;
	var squirtDamage = pokedex.myPokemon[2].attackPoints;
	var pickaAttDescription = pokedex.myPokemon[0].attackDescription;
	var charAttDescription = pokedex.myPokemon[1].attackDescription;
	var squirtAttDescription = pokedex.myPokemon[2].attackDescription;
	
	
	if (pokemonName === "Pickachu") {
		attackName = prompt("Choose an attack: " + pickachu[0] + " or " + pickachu[1] + " or " + pickachu[2]);
		if (attackName === pickachu[0]) {
			console.log(pickachu[0] + " did " + pickaDamage[0] + " damage!");
		} else if (attackName === pickachu[1]) {
			console.log(pickachu[1] + " did " + pickaDamage[1] + " damage! " + pickachu[1] + " " + pickaAttDescription[1] + ".");
		} else if (attackName === pickachu[2]) {
			console.log(pickachu[2] + " did " + pickaDamage[2] + " damage! " + pickachu[2] + " " +  pickaAttDescription[2] + ".");
		};
	} else if (pokemonName === "Charmander") {
		
	} else if (pokemonName === "Squirtle") {
		
	};
};

var catchPoke = function () {
	
};

// Main Code


console.log("Wild Bulbasaur attacks!");

console.log("You have " + numberOfMyPokemon + " Pokemon on your PokeBelt!" );


while (changePokemon === false) {
	chosenPokemon = prompt("Choose one of your Pokemon to view their stats.", "Charmander, Pickachu, Squirtle");

	pokemonName = showStats(chosenPokemon);		// displays stats for pokemon(string) passed in from user prompt

	changePokemon = confirm("Do you want to use " + pokemonName + "?");
};

console.log("Alright, let's get'em " + pokemonName + "!");

attackOrThrow = prompt("What do you want to do?", "attack or throw pokeball");

if (attackOrThrow === "attack") {
	attackPoke(pokemonName);
} else if (attackOrThrow === "throw pokeball") {
	// call to a function to throw pokeball
};









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