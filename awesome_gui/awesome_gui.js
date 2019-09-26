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
        // console.log(`this is the value of semitones: ${semitones}`);
        let shuffle = semitones.sort(() => Math.random() - 0.5);
        // console.log(`this is the value of shuffle: ${shuffle}`);
        this.notes = shuffle
            .slice(0, 2)
            .toString()
            .split(",")
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
        // console.log(`this is the value of this.notes: ${this.notes}`);
        return this.notes;
    }

    calcuDistance() {
        for (let i = 0; i < this.notesArray.length; i++) {
            if (
                this.notes[0] == this.notesArray[i][0] ||
                this.notes[0] == this.notesArray[i][1]
            ) {
                this.firstPos = i;
            }
            if (
                this.notes[1] == this.notesArray[i][0] ||
                this.notes[1] == this.notesArray[i][1]
            ) {
                this.secondPos = i;
            }
        }
        if (this.firstPos <= this.secondPos) {
            this.distance = this.secondPos - this.firstPos;
        } else if (this.firstPos > this.secondPos) {
            this.distance = this.secondPos + 12 - this.firstPos;
        }
        // console.log(`This is the value of firstPos: ${this.firstPos}`);
        // console.log(`This is the value of secondPos: ${this.secondPos}`);
        // console.log(`This is the value of this.distance: ${this.distance}`);

        return this.distance;
    }

    checkAnswer(userDistance) {
        let actualDistance = this.distance;

        return actualDistance === userDistance ? true : false;
    }
}

let buddy = new JamBuddy();
var count = 0
    // console.log(buddy.selectNotes());
    // console.log(buddy.calcuDistance());
    // console.log(buddy.checkAnswer());

function getRandomNotes() {
    document.getElementById("RandomNotes").innerHTML = buddy.selectNotes();

    document.getElementById("explanation").innerHTML = "";
}

function getAnswer() {
    buddy.calcuDistance();

    let userInput = parseFloat(document.getElementById("userInput").value);

    buddy.checkAnswer(userInput);

    if (buddy.checkAnswer(userInput) == true) {
        document.getElementById("result").innerHTML =
            "You got it right .Well Done!";
        count++
    } else {
        document.getElementById("result").innerHTML = "Wrong answer! Try again";
        count = 0
    }
    document.getElementById("streak").innerHTML = `Streak: ${count}`;
    revealAnswer();
}

function revealAnswer() {
    let theNotes = document.getElementById("explanation");
    let firstNote = buddy.notes[0];
    let secondNote = buddy.notes[1];

    theNotes.innerHTML = `${
    buddy.notesArray
  } <br /><br /> The correct answer is ${buddy.calcuDistance()}`;

    for (let i = 0; i < theNotes.length; i++) {
        if (theNotes[i][0] == firstNote || theNotes[i][1] == firstNote) {
            console.log(theNotes[i]);
            theNotes[i].fontColor('purple');
        }
        if (theNotes[i][0] == secondNote || theNotes[i][1] == secondNote) {
            console.log(theNotes[i]);

            theNotes[i].fontColor('purple');
        }
    }
}
window.onload = function() {
    getRandomNotes();
};

exports.JamBuddy = JamBuddy;
exports.getRandomNotes = getRandomNotes;
exports.getAnswer = getAnswer;