const Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];

    this.makeLetters = function() {
        let wordArr = this.word.split("");
        for (let i = 0; i < wordArr.length; i++) {
            let newLetter = new Letter(wordArr[i]);
            this.letters.push(newLetter);
        }
    }

    this.makeGuess = function(guess) {
        this.letters.forEach(letter => {
            letter.checkLetter(guess);
        });
    }

    this.update = function() {
        let printedWord = " ";
        this.letters.forEach(letter => {
            printedWord += letter.getCharacter() + " ";
        });
        return printedWord;
    }
}

module.exports = Word;
/********************************************************************Space words */
// var space = [
//     "ufo",
//     "quasar",
//     "pluto",
//     "galaxy",
//     "interspace",
//     "nebula",
//     "nova",
//     "cosmos",
//     "alien",
//     "particles",
//     "vaccuum"
// ];
// const Word = require("./word.js");
// const inquirer = require("inquirer");

// const wordBank = [
//     "mercury", "venus", "earth",
//     "mars", "jupiter", "saturn",
//     "uranus", "neptune", "pluto",
//     "ceres", "eris", "makemake",
//     "haumea"
// ];

// let guesses;
// let pickedWords;
// let word;
// let pickedWord;

// function init() {
//     pickedWords = [];
//     console.log("\n ************************************************************ ")
//     console.log("\n Hello, and welcome to Word Guess in Space! \n");

//     playGame();
// }

// function playGame() {
//     pickedWord = "";
//     guesses = 15;
//     if (pickedWords.length < wordBank.length) {
//         pickedWord = getWord();
//     } else {
//         // WIN CONDITION
//         console.log("You know a lot about your celestial neighborhood. Cheers!");
//         continuePrompt();
//     }
//     if (pickedWord) {
//         word = new Word(pickedWord);
//         word.makeLetters();
//         makeGuess();
//     }
// }

// function getWord() {
//     let rand = Math.floor(Math.random() * wordBank.length);
//     let randomWord = wordBank[rand];
//     if (pickedWords.indexOf(randomWord) === -1) {
//         pickedWords.push(randomWord);
//         return randomWord;
//     } else {
//         return getWord();
//     }
// }

// function makeGuess() {
//     let checker = [];
//     inquirer.prompt([{
//             name: "guessedLetter",
//             message: word.update() + "\n " + "\n Guess a letter!" + "\n Guesses Left: " + guesses

//         }])
//         .then(data => {
//             word.letters.forEach(letter => {
//                 letter.checkLetter(data.guessedLetter);
//                 checker.push(letter.getCharacter());
//             });
//             if (guesses > 0 && checker.indexOf("_") !== -1) {
//                 guesses--;
//                 if (guesses === 0) {

//                     console.log("\n YOU RAN OUT OF GUESSES! GAME OVER.");
//                     continuePrompt();
//                 } else {
//                     makeGuess();
//                 }
//             } else {
//                 console.log("CONGRATULATIONS! YOU GOT THE WORD!");
//                 console.log(word.update());
//                 continuePrompt()

//             }
//         });
//     console.log("\n ")
//     console.log("\n************************************************************ ")
// }

// function continuePrompt() {
//     inquirer.prompt([{
//             name: "continue",
//             type: "list",
//             message: "Would you like to play again?",
//             choices: ["Yes", "No"]
//         }])
//         .then(data => {
//             if (data.continue === "Yes") {
//                 init();
//             } else {
//                 console.log("Thanks for playing!")
//                 console.log("\n ");
//             }
//         });
// }

// init();