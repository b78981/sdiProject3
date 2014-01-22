// JSON data

//alert("JavaScript works!");

var pokedex = {
	"myPokemon": [
		{
			"name": "Pickachu",
			"hp": 75,
			"attacks": {
				"attackList": ["Thundershock", "Slam", "Tackle"],
				"attackPoints": [35, 30, 20],
				"attackDescription": ["does 35 damage", "does 30 damage", "does 20 damage"] 
			},
			"onBelt": true
		},
		{
			"name": "Charmander",
			"hp": 70,
			"attacks": {
				"attackList": ["Ember", "Scratch", "Tackle"],
				"attackPoints": [30, 25, 20],
				"attackDescription": ["does 30 damage", "does 25 damage", "does 20 damage"]
			},
			"onBelt": true
		},
		{
			"name": "Squirtle",
			"hp": 80,
			"attacks": {
				"attackList": ["Water Gun", "Scratch", "Bubble"],
				"attackPoints": [30, 25, 35],
				"attackDescription": ["does 30 damage", "does 25 damage", "does 35 Damage"]
			},
			"onBelt": true
		}
	],
	"wildPokemon": [
		{
			"name": "Bulbasaur",
			"hp": 65,
			"attacks": {
				"attackList": ["Tackle", "Cut", "Vine Whip"],
				"attackPoints": [20, 25, 35],
				"attackDescription": ["does 20 damage", "does 25 damage", "does 35 damage"]
			},
			"onBelt": false
		}
	]
};