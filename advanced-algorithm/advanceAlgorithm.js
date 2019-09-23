class JamBuddy {
    constructor() {
        this.notesArray = [
            "A", ["A#", "Bb"],
            "B",
            "C", ["C#", "Db"],
            "D", ["D#", "Eb"],
            "E",
            "F", ["F#", "Gb"],
            "G", ["G#", "Ab"]
        ];
    }

    selectNotes() {
        let semitones = [...this.notesArray];
        let shuffle = semitones.sort(() => Math.random() - 0.5);
        this.notes = shuffle
            .slice(0, 2)
            .toString()
            .split(",")
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
        return this.notes;
    }
    calcuDistance() {
        let firstNote = this.notes[0];
        let secondNote = this.notes[1];
        let firstPos, secondPos;
        firstPos = this.notesArray.indexOf(firstNote);
        secondPos = this.notesArray.indexOf(secondNote);
        if (firstPos == -1 || secondPos == -1) {
            for (let i = 0; i < this.notesArray.length; i++) {
                if (
                    firstNote == this.notesArray[i][0] ||
                    firstNote == this.notesArray[i][1]
                ) {
                    firstPos = i;
                } else if (
                    secondNote == this.notesArray[i][0] ||
                    secondNote[1] == this.notesArray[i][1]
                ) {
                    secondPos = i;
                }
            }
        }
        if (firstPos < secondPos) {
            this.distance = secondPos - firstPos;
        } else if (firstPos > secondPos) {
            this.distance = secondPos + 12 - firstPos;
        }
        return this.distance;
    }

    checkAnswer(userDistance) {
        let actualDistance = this.distance;

        return actualDistance === userDistance ? true : false;
    }
}

let buddy = new JamBuddy();

function getRandomNotes() {
    document.getElementById("RandomNotes").innerHTML = buddy.selectNotes();
    return true;
}

function getAnswer() {
    buddy.calcuDistance();

    let userInput = parseFloat(document.getElementById("userInput").value);

    buddy.checkAnswer(userInput);

    if (buddy.checkAnswer(userInput) == true) {
        document.getElementById("result").innerHTML =
            "You got it right .Well Done!";
    } else {
        document.getElementById("result").innerHTML = "Wrong answer! Try again";
    }
}

exports.JamBuddy = JamBuddy;
exports.getRandomNotes = getRandomNotes;
exports.getAnswer = getAnswer;