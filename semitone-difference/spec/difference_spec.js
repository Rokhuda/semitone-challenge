describe("JamBuddy", () => {
    var JamBuddy, jamBuddy;
    beforeEach(() => {
        JamBuddy = require('../difference');
        jamBuddy = new JamBuddy();
    });

    describe("selectNotes", () => {
 
        it("should be defined",() => {
            expect(jamBuddy.selectNotes()).toBeDefined;
        });

        it("should return two randomly selected notes ",() => {
            expect(jamBuddy.selectNotes().length).toEqual(2);
        });

        it("should return an array", () => {
            expect(jamBuddy.selectNotes()).toEqual(jasmine.any(Array));
        });
    });

    describe("checkAnswer",() => {
        
        it("should be defined", () => {
            expect(jamBuddy.checkAnswer()).toBeDefined;
        });

        it("should return false if the incorrect distance was inputed.", () => {
            jamBuddy.selectNotes()
            jamBuddy.calcuDistance(['A', 'B'])
            expect(jamBuddy.checkAnswer(1)).toBe(false);
        });
    });

    describe("calcuDistance", () => {

        it("should be defined", () => {
            jamBuddy.selectNotes();
            expect(jamBuddy.calcuDistance()).toBeDefined();
        });

        it("should return an integer", () => {
            jamBuddy.selectNotes();
            expect(jamBuddy.calcuDistance()).toEqual(jasmine.any(Number));
        });
    });
});