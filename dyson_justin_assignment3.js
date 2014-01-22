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
var damageGiven = 0; // amount of damage done to bulbasaur that is returned from the attackPoke function
var bulbaHp = pokedex.wildPokemon[0].hp; // Bulbasuar's total HP
var bulbaFainted = false;
var bulbaCaught = false;
var newMoves; 	// array returnd from learnBodySlam function

// Functions

var showStats = function (pokemon) {		// shows stats for pokemon chosen by user, string is passed in
	for (i = 0; i < pokedex.myPokemon.length; i++) {
		if (pokemon === pokedex.myPokemon[i].name) {
			console.log("---");
			console.log("Pokemon Name: " + pokedex.myPokemon[i].name);
			console.log("Total HP: " + pokedex.myPokemon[i].hp);
			console.log("Attacks:");
			console.log(pokedex.myPokemon[i].attacks.attackList[0] + ": " + pokedex.myPokemon[i].attacks.attackDescription[0] );
			console.log(pokedex.myPokemon[i].attacks.attackList[1] + ": " + pokedex.myPokemon[i].attacks.attackDescription[1] );
			console.log(pokedex.myPokemon[i].attacks.attackList[2] + ": " + pokedex.myPokemon[i].attacks.attackDescription[2] );
		};
	};

	return pokemon; // returns string of pokemonName
};


var attackPoke = function (pokemonName) {	// depending on the pokemon, the user chooses an attack and returns the amount of damage done
	var attackName; 
	var pickachu = pokedex.myPokemon[0].attacks.attackList;
	var charmander = pokedex.myPokemon[1].attacks.attackList;
	var squirtle = pokedex.myPokemon[2].attacks.attackList;
	var pickaDamage = pokedex.myPokemon[0].attacks.attackPoints;
	var charDamage = pokedex.myPokemon[1].attacks.attackPoints;
	var squirtDamage = pokedex.myPokemon[2].attacks.attackPoints;

	
	if (pokemonName === "Pickachu") {
		attackName = prompt("Choose an attack: " + pickachu[0] + " or " + pickachu[1] + " or " + pickachu[2]);
		if (attackName === pickachu[0]) {
			console.log(pickachu[0] + " did " + pickaDamage[0] + " damage!");
			return pickaDamage[0];
		} else if (attackName === pickachu[1]) {
			console.log(pickachu[1] + " did " + pickaDamage[1] + " damage!");
			return pickaDamage[1];
		} else if (attackName === pickachu[2]) {
			console.log(pickachu[2] + " did " + pickaDamage[2] + " damage!");
			return pickaDamage[2];
		};
		
	} else if (pokemonName === "Charmander") {
		attackName = prompt("Choose an attack: " + charmander[0] + " or " + charmander[1] + " or " + charmander[2]);
		if (attackName === charmander[0]) {
			console.log(charmander[0] + " did " + charDamage[0] + " damage!");
			return charDamage[0];
		} else if (attackName === charmander[1]) {
			console.log(charmander[1] + " did " + charDamage[1] + " damage!");
			return charDamage[1];
		} else if (attackName === charmander[2]) {
			console.log(charmander[2] + " did " + charDamage[2] + " damage!");
			return charDamage[2];
		};
				
	} else if (pokemonName === "Squirtle") {
		attackName = prompt("Choose an attack: " + squirtle[0] + " or " + squirtle[1] + " or " + squirtle[2]);
		if (attackName === squirtle[0]) {
			console.log(squirtle[0] + " did " + squirtDamage[0] + " damage!");
			return squirtDamage[0];
		} else if (attackName === squirtle[1]) {
			console.log(squirtle[1] + " did " + squirtDamage[1] + " damage!");
			return squirtDamage[1];
		} else if (attackName === squirtle[2]) {
			console.log(squirtle[2] + " did " + squirtDamage[2] + " damage!");
			return squirtDamage[2];
		};
		
		return squirtDamage;
	};
};

var catchPoke = function () {
	
};

var learnBodySlam = function (pokemon) {	// teaches a Pokemon Body Slam
	if (pokemon === "Pickachu") {
		newAttackList = pokedex.myPokemon[0].attacks.attackList.push("Body Slam");
		
		return pokedex.myPokemon[0].attacks.attackList;
		
	} else if (pokemon === "Charmander") {
		newAttackList = pokedex.myPokemon[1].attacks.attackList.push("Body Slam");
		
		return pokedex.myPokemon[1].attacks.attackList;
		
	} else if (pokemon === "Squirtle") {
		newAttackList = pokedex.myPokemon[2].attacks.attackList.push("Body Slam");
		
		return pokedex.myPokemon[2].attacks.attackList;
	};
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

while (bulbaFainted === false && bulbaCaught === false) {
	
	attackOrThrow = prompt("What do you want to do?", "attack or throw pokeball");
	
	if (attackOrThrow === "attack") {
		damageGiven = attackPoke(pokemonName);
		bulbaHp = bulbaHp - damageGiven;
		if (bulbaHp <= 0) {
			bulbaFainted = true;
			console.log("Wild Bulbasuar fainted!");
			console.log("You will have to search far and wide to find another Bulbasaur...");	// potential final outcome
			console.log(pokemonName + " received 100 Exp Points for defeating wild Bulbasaur!")
			console.log(pokemonName + " gained 1 level and learned the attack Body Slam!");
			newMoves = learnBodySlam(pokemonName); 	// push a new attack to the pokemon who defeats bulbasaur
			console.log(pokemonName + "'s new move set is:" + newMoves);
		} else if (!(bulbaHp <= 0)) {
			// call to a function where bulbasuar attacks
		};
	} else if (attackOrThrow === "throw pokeball") {
		// call to a function to throw pokeball
	};

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