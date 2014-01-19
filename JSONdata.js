// JSON data

//alert("JavaScript works!");

var pokedex = {
	"myPokemon": [
		{
			"name": "Pickachu",
			"hp": 75,
			"attackList": ["Thundershock", "Leer", "Thunderwave"],
			"attackPoints": [30, 0, 0],
			"attackDescription": ["Does 30 damage", "Lowers enemy defense by 1", "Paralyzes the enemy"],
			"onBelt": true
		},
		{
			"name": "Charmander",
			"hp": 70,
			"attackList": ["Ember", "Scratch", "Growl"],
			"attackPoints": [30, 25, 0],
			"attackDescription": ["Does 30 damage", "Does 25 damage", "Lowers enemy's attack by 1"],
			"onBelt": true
		},
		{
			"name": "Squirtle",
			"hp": 80,
			"attackList": ["Water Gun", "Leer", "Bubble"],
			"attackPoints": [30, 0, 35],
			"attackDescription": ["Does 30 damage", "Lowers enemy defense by 1", "Does 35 Damage"],
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