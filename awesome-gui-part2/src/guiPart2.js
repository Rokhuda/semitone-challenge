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
        for (let i = 0; i < this.notesArray.length; i++) {
            if (
                this.notes[0] == this.notesArray[i][0] || this.notes[0] == this.notesArray[i][1]
            ) {
                this.firstPos = i;
            }
            if (
                this.notes[1] == this.notesArray[i][0] || this.notes[1] == this.notesArray[i][1]
            ) {
                this.secondPos = i;
            }
        }
        if (this.firstPos <= this.secondPos) {
            this.distance = this.secondPos - this.firstPos;
        } else if (this.firstPos > this.secondPos) {
            this.distance = this.secondPos + 12 - this.firstPos;
        }

        return this.distance;
    }

    checkAnswer(userDistance) {
        let actualDistance = this.distance;
        return actualDistance === userDistance ? true : false;
    }
}

let buddy = new JamBuddy();
var count = 0;

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
        count++;
        revealAnswer();
    } else {
        document.getElementById("result").innerHTML = "Wrong answer! Try again";
        count = 0;
    }
    document.getElementById("streak").innerHTML = `Streak: ${count}`;
}

function revealAnswer() {
    let notes = document
        .getElementById("RandomNotes")
        .innerHTML.toString()
        .split(",");
    let semitones = [...buddy.notesArray].toString().split(",");
    for (let i = 0; i < semitones.length; i++) {
        if (notes[0] == semitones[i]) {
            semitones[i] = semitones[i]
                .toString()
                .fontcolor("red")
                .fontsize(5);
        } else if (notes[1] == semitones[i]) {
            semitones[i] = semitones[i]
                .toString()
                .fontcolor("red")
                .fontsize(5);
        }
    }
    document.getElementById(
        "explanation"
    ).innerHTML = `${semitones}, <br /><br /> The correct answer is ${buddy.calcuDistance()}`;
}

exports.JamBuddy = JamBuddy;
exports.getRandomNotes = getRandomNotes;
exports.getAnswer = getAnswer;
exports.revealAnswer = revealAnswer;