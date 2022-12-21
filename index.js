var marvel = require("marvel-characters");
// var superHero = document.getElementById("superhero");
// var superVillain = document.getElementById("supervillain");
var supervillains = require("supervillains");

var hero = marvel();
console.log(hero);
var villain = supervillains.random();
console.log(villain);

//maybe need to add a server
//or learn and add api