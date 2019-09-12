class JamBuddy{
    constructor(){
        this.notesArray = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    }

    selectNotes(){
        let semitones = [...this.notesArray]
        let shuffle = semitones.sort(() => Math.random() - 0.5);
        this.notes = shuffle.slice(0,2);
        return this.notes;   
    }

    calcuDistance(){
        let firstNote = this.notes[0];
        let secondNote = this.notes[1]
        let firstPos = this.notesArray.indexOf(firstNote);
        let secondPos = this.notesArray.indexOf(secondNote);
        this.distance;

        if(firstPos < secondPos){
            this.distance = secondPos - firstPos;
        } else if(firstPos > secondPos){
            this.distance = (secondPos+12) - firstPos;
        }

        return this.distance;
       
    }

    checkAnswer(userDistance){
        let actualDistance = this.distance;
      
        return actualDistance === userDistance ? true : false;
    };

}
module.exports = JamBuddy;