var fs = require("fs");
var inquirer = require("inquirer");

const BasicCard = require('./BasicCard.js');
const ClozeCard = require('./ClozeCard.js');

var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = ClozeCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

var fs = require("fs");

// use the file system for node to allow for creation of flash cards and saving to a log.txt file
// use inquirer to ask the user for the "front" and the "back" of the flash card they wish to create
// use prompts such as "create" and "view" for the different logic paths