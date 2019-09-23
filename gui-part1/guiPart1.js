class JamBuddy {
    constructor() {
        this.notesArray = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    }

    selectNotes() {
        let semitones = [...this.notesArray]
        let shuffle = semitones.sort(() => Math.random() - 0.5);
        this.notes = shuffle.slice(0, 2);
        return this.notes;
    }

    calcuDistance() {
        let firstNote = this.notes[0];
        let secondNote = this.notes[1]
        let firstPos = this.notesArray.indexOf(firstNote);
        "userInput"
        let secondPos = this.notesArray.indexOf(secondNote);
        this.distance;

        if (firstPos < secondPos) {
            this.distance = secondPos - firstPos;
        } else if (firstPos > secondPos) {
            this.distance = (secondPos + 12) - firstPos;
        }

        return this.distance;

    }

    checkAnswer(userDistance) {
        let actualDistance = this.distance;

        return actualDistance === userDistance ? true : false;
    };

}

let buddy = new JamBuddy();

function getRandomNotes() {
    document.getElementById('RandomNotes').innerHTML = buddy.selectNotes();
    return true
}

function getAnswer() {
    buddy.calcuDistance()

    let userInput = parseFloat(document.getElementById("userInput").value);


    buddy.checkAnswer(userInput);

    if (buddy.checkAnswer(userInput) == true) {
        document.getElementById('result').innerHTML = "You got it right .Well Done!";
    } else {
        document.getElementById('result').innerHTML = "Wrong answer! Try again"
    }
};

exports.JamBuddy = JamBuddy;
exports.getRandomNotes = getRandomNotes;
exports.getAnswer = getAnswer;