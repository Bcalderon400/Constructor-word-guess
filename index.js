var Word = require("./word.js");
var inquirer = require("inquirer");

var space = [
    "ufo",
    "quasar",
    "pluto",
    "galaxy",
    "interspace",
    "nebula",
    "nova",
    "cosmos",
    "alien",
    "particles",
    "vaccuum"
];

var guesses;
var pickedWords;
var word;
var pickedWord;

function init() {
    pickedWords = [];
    console.log("\n ******************************************************* ")
    console.log("\n Hello, and welcome to Word Guess in Space!");
    console.log("\n ******************************************************* ");
    console.log("\n ")
    playGame();
}

function playGame() {
    pickedWord = "";
    guesses = 15;
    if (pickedWords.length < space.length) {
        pickedWord = getWord();
    }
    if (pickedWord) {
        word = new Word(pickedWord);
        word.makeLetters();
        makeGuess();
    }
}

function getWord() {
    var rand = Math.floor(Math.random() * space.length);
    var randomWord = space[rand];
    if (pickedWords.indexOf(randomWord) === -1) {
        pickedWords.push(randomWord);
        return randomWord;
    } else {
        return getWord();
    }
}

function makeGuess() {
    var checker = [];
    inquirer.prompt([{
            name: "guessedLetter",
            message: word.update() +
                "\n Guess a letter!" +
                "\n Guesses Left: " +
                guesses
        }])
        .then(data => {
            word.letters.forEach(letter => {
                letter.checkLetter(data.guessedLetter);
                checker.push(letter.getCharacter());
            });
            if (guesses > 0 && checker.indexOf("_") !== -1) {
                guesses--;
                if (guesses === 0) {
                    console.log("YOU RAN OUT OF GUESSES! GAME OVER.");
                    continuePrompt();
                } else {
                    makeGuess();
                }
            } else {
                console.log("\n ")
                console.log("CONGRATULATIONS! YOU GOT THE WORD!");
                console.log(word.update());
                continuePrompt();
            }
        });

}

function continuePrompt() {
    console.log("\n ")
    inquirer.prompt([{
            name: "continue",
            type: "list",
            message: "Would you like to play again?",
            choices: ["Yes", "No"]
        }])
        .then(data => {
            if (data.continue === "Yes") {
                init();
            } else {
                console.log("Thanks for playing!");
            }
        });
}

init();