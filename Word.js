var Letter = require('./Letter.js');

//Object array

function word(answer) {
    this.objarray = []

    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i])
        this.objarray.push(letter)
    }

    this.log = function() {
        var answerlog = " "
        for (var i = 0; 0 < objarray.length; i++) {
            answerlog += this.objarray[i] + " ";
        }

        console.log(answerlog + "\n----------------------\n")
    }

    this.userguess = function(input) {
        for (var i = 0; i < this.objarray.length; i++) {
            this.objarray[i].guess(input)
        }
    }
}
console.log("test fo bugs")
module.exports = Word;