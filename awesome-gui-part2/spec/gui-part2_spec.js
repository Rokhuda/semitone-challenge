var jsdom = require("jsdom");
const methods = require("../src/guiPart2");
const JamBuddy = methods.JamBuddy;
const getRandomNotes = methods.getRandomNotes;
const getAnswer = methods.getAnswer;
const revealAnswer = methods.revealAnswer;

describe("JamBuddy", () => {
    var jamBuddy;
    beforeEach(() => {
        jamBuddy = new JamBuddy();
    });

    describe("selectNotes", () => {
        it("should be defined", () => {
            expect(jamBuddy.selectNotes()).toBeDefined;
        });

        it("should return two randomly selected notes ", () => {
            expect(jamBuddy.selectNotes().length).toEqual(2);
        });

        it("should return an array", () => {
            expect(jamBuddy.selectNotes()).toEqual(jasmine.any(Array));
        });
    });

    describe("checkAnswer", () => {
        it("should be defined", () => {
            expect(jamBuddy.checkAnswer()).toBeDefined;
        });

        it("should return false if the incorrect distance was inputed.", () => {
            jamBuddy.selectNotes();
            jamBuddy.calcuDistance();
            expect(jamBuddy.checkAnswer(1000)).toBe(false);
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

    describe("GUI functionality", () => {
        beforeEach(function() {
            const dom = new jsdom.JSDOM(
                '<div id="RandomNotes"></div><div id="explanation"></div><input type="text" id="userInput"placeholder="Enter semitone difference"/><div id="result"></div><div id="streak"></div>'
            );
            global.document = dom.window.document;
            global.window = dom.window;
            global.navigator = dom.window.navigator;
        });

        describe("getRandomNotes", () => {
            it("should update a dom when event is triggered", () => {
                expect(global.document.getElementById("RandomNotes").innerHTML).toBe(
                    ""
                );
                getRandomNotes();
                expect(
                    global.document.getElementById("RandomNotes").innerHTML
                ).not.toBe("");
            });
        });

        describe("getAnswer", () => {
            it("should update a dom when event is triggered", () => {
                expect(global.document.getElementById("result").innerHTML).toBe("");
                getRandomNotes();
                getAnswer();
                expect(global.document.getElementById("result").innerHTML).not.toBe("");
            });
        });

        describe("revealAnswer", () => {
            it("should update the dom when event is triggered", () => {
                expect(global.document.getElementById("explanation").innerHTML).toBe(
                    ""
                );
                getRandomNotes();
                revealAnswer();
                expect(
                    global.document.getElementById("explanation").innerHTML
                ).not.toBe("");
            });
        });
    });
});