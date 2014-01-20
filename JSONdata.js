// JSON data

//alert("JavaScript works!");

var pokedex = {
	"myPokemon": [
		{
			"name": "Pickachu",
			"hp": 75,
			"attackList": ["Thundershock", "Leer", "Thunderwave"],
			"attackPoints": [30, 0, 0],
			"attackDescription": ["does 30 damage", "lowers the enemy defense by 1", "paralyzes the enemy"],
			"onBelt": true
		},
		{
			"name": "Charmander",
			"hp": 70,
			"attackList": ["Ember", "Scratch", "Growl"],
			"attackPoints": [30, 25, 0],
			"attackDescription": ["does 30 damage", "does 25 damage", "lowers the enemy's attack by 1"],
			"onBelt": true
		},
		{
			"name": "Squirtle",
			"hp": 80,
			"attackList": ["Water Gun", "Leer", "Bubble"],
			"attackPoints": [30, 0, 35],
			"attackDescription": ["does 30 damage", "lowers the enemy defense by 1", "does 35 Damage"],
			"onBelt": true
		}
	],
	"wildPokemon": [
		{
			"name": "Bulbasaur",
			"hp": 65,
			"attackList": ["Tackle", "Growl"],
			"attackPoints": [25, 0,],
			"onBelt": false
		}
	]
};