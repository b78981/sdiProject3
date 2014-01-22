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
var attackOrRun; // string for user decision to attack bulbasuar or throw a pokeball
var damageGiven = 0; // amount of damage done to bulbasaur that is returned from the attackPoke function
var bulbaHp = pokedex.wildPokemon[0].hp; // Bulbasuar's total HP
var bulbaFainted = false;
var willRun = false;
var newMoves; 	// array returnd from learnBodySlam function
var timeThrough = 0; // iterator for Bulbasaurs moveset
var damageTaken = 0; // damage received from Bulbasaur attacks
var totalDamage = []; // array of all the damage taken on each hit
var stillAlive = true; // boolean return for calculateDamage function

// Functions


var showStats = function (pokemonName) {		// shows stats for pokemon chosen by user, string is passed in
	for (var i = 0; i < pokedex.myPokemon.length; i++) {
		if (pokemonName === pokedex.myPokemon[i].name) {
			console.log("Pokemon Name: " + pokedex.myPokemon[i].name);
			console.log("Total HP: " + pokedex.myPokemon[i].hp);
			console.log("Attacks:");
			console.log(pokedex.myPokemon[i].attacks.attackList[0] + ": " + pokedex.myPokemon[i].attacks.attackDescription[0] );
			console.log(pokedex.myPokemon[i].attacks.attackList[1] + ": " + pokedex.myPokemon[i].attacks.attackDescription[1] );
			console.log(pokedex.myPokemon[i].attacks.attackList[2] + ": " + pokedex.myPokemon[i].attacks.attackDescription[2] );
		};
	};

	return pokemonName; // returns string of pokemonName
};

var attackPoke = function (pokemonName) {	// NEW attackPoke FUNCTION = MORE EFFICENT accepts string
	var attackName; // holds string value of user input

	for (var i = 0; i < pokedex.myPokemon.length; i++) {
		if (pokemonName === pokedex.myPokemon[i].name) {
			attackName = prompt("Choose an attack: " + pokedex.myPokemon[i].attacks.attackList[0] + " or " + pokedex.myPokemon[i].attacks.attackList		[1] + " or " + pokedex.myPokemon[i].attacks.attackList[2]);
			
			for (var i2 = 0; i2 < pokedex.myPokemon[i].attacks.attackList.length; i2++) {
				if (attackName === pokedex.myPokemon[i].attacks.attackList[i2]) {
					console.log(pokedex.myPokemon[i].attacks.attackList[i2] + " did " + pokedex.myPokemon[i].attacks.attackPoints[i2] + " damage!");
					
					return pokedex.myPokemon[i].attacks.attackPoints[i2]; // returns a number
				};
			};
		};
	};
};

var pokeRun = function (willRun) {	// procedure, accepts boolean argument
	if (willRun) {
		console.log("Wild Bulbasaur scared you. You took off running into the woods...");
	};
};

var learnBodySlam = function (pokemonName) {	// NEW learnBodySlam FUNCTION= MORE EFFICIENT ACCEPTS STRING VALUE
	for (var i = 0; i < pokedex.myPokemon.length; i++) {
		if (pokemonName === pokedex.myPokemon[i].name) {
			pokedex.myPokemon[i].attacks.attackList.push("Body Slam");
			
			return pokedex.myPokemon[i].attacks.attackList; // returns an attackList array
		};
	};
};


var bulbaAttacks = function (timeThru) {	// accepts a number
	
	if (timeThru === 0 || timeThru === 3 ) {
		console.log("Wild Bulbasaur used " + pokedex.wildPokemon[0].attacks.attackList[0] + "!");
		return pokedex.wildPokemon[0].attacks.attackPoints[0];	//returns a number
	} else if (timeThru === 1 || timeThru === 4) {
		console.log("Wild Bulbasaur used " + pokedex.wildPokemon[0].attacks.attackList[1] + "!");
		return pokedex.wildPokemon[0].attacks.attackPoints[1];	//returns a number
	} else if (timeThru === 2 || timeThru === 5) {
		console.log("Wild Bulbasaur used " + pokedex.wildPokemon[0].attacks.attackList[2] + "!");
		return pokedex.wildPokemon[0].attacks.attackPoints[2];	//returns a number
	};
};

/*var calculateDamage = function (totalDamageTaken) {		// accepts an array
	var damageAsInt = 0;
	var notFainted = true;
	
	for (var i = 0; i < pokedex.myPokemon.length; i++) {
		if (pokemonName === pokedex.myPokemon[i].name) {
			pokedex.myPokemon[i].hp = pokedex.myPokemon[i].hp - damageTaken;	
			console.log(pokemonName + " lost " + damageTaken + " HP.");
		};
		if (pokedex.myPokemon[i].hp > damageAsInt) {
			notFainted = true;
		};
	};
	for (var i2 = 0; i2 < totalDamageTaken.length; i2 ++) {
		damageAsInt += totalDamageTaken[i2];
	};
	console.log(pokemonName + " has taken a total of " + damageAsInt + " damage.");

	return notFainted;
};*/

var calculateDamage = function (totalDamageTaken) {		// accepts an array
	var damageAsInt = 0;
	var notFainted = true;
	
	for (var i = 0; i < pokedex.myPokemon.length; i++) {
		if (pokemonName === pokedex.myPokemon[i].name) {
			pokedex.myPokemon[i].hp = pokedex.myPokemon[i].hp - damageTaken;	
			console.log(pokemonName + " lost " + damageTaken + " HP.");
		};
	};
	for (var i2 = 0; i2 < totalDamageTaken.length; i2 ++) {
		damageAsInt += totalDamageTaken[i2];
	};
	
	console.log(pokemonName + " has taken a total of " + damageAsInt + " damage.");
	
	for (var i = 0; i < pokedex.myPokemon.length; i++) {
		if (pokedex.myPokemon[i].hp < damageAsInt) {
			notFainted = false;
		};
	};
	
	return notFainted;
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

while (bulbaFainted === false && willRun === false) {
	
	attackOrRun = prompt("What do you want to do?", "Attack or Run");
	
	if (attackOrRun === "attack") {
		damageGiven = attackPoke(pokemonName);
		bulbaHp = bulbaHp - damageGiven;
		if (bulbaHp <= 0) {		// potential final outcome
			bulbaFainted = true;
			console.log("Wild Bulbasuar fainted!");
			console.log(pokemonName + " received 100 Exp Points for defeating wild Bulbasaur!")
			console.log(pokemonName + " gained 1 level and learned the attack Body Slam!");
			newMoves = learnBodySlam(pokemonName); 	// push a new attack to the pokemon who defeats bulbasaur
			console.log(pokemonName + "'s new move set is:" + newMoves);
		} else if (!(bulbaHp <= 0) &&  (stillAlive === true)/*!(pokedex.myPokemon[0].hp <= 0) && !(pokedex.myPokemon[1].hp <= 0) && !(pokedex.myPokemon[2].hp <= 0)*/ ) {
 			totalDamage.push(damageTaken = bulbaAttacks(timeThrough));
			timeThrough++;
			stillAlive = calculateDamage(totalDamage);
 		} else if (stillAlive === false) {
			console.log("Your Pokemon has fainted... you ran away screaming like a little girl.");	// potential final outcome	
			willRun = true;
		};
	} else if (attackOrRun === "run") {
		willRun = true;
		pokeRun(willRun);		// potential final outcome
	};

};
