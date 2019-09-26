var jsdom = require("jsdom");
const methods = require('../awesome_gui');
const JamBuddy = methods.JamBuddy;
const getRandomNotes = methods.getRandomNotes;
const getAnswer = methods.getAnswer;

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

describe('getRandomNotes', () => {

    beforeEach(function() {
        const dom = new jsdom.JSDOM('<button onclick="getRandomNotes()">Get random notes</button><p id ="RandomNotes"></p><input type="text" id="userInput" placeholder="Enter semitone difference"><br><button onclick="getAnswer()">Submit</button><p id="button"></p>');
        global.document = dom.window.document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;
    });

    it("should update a dom when event is triggered", function() {
        expect(global.document.getElementById("RandomNotes").innerHTML).toBe('');
        getRandomNotes()
        expect(global.document.getElementById("RandomNotes").innerHTML).not.toBe('');
    });


});

describe('getAnswer', () => {

    beforeEach(function() {
        const dom = new jsdom.JSDOM('<button onclick="getRandomNotes()">Get random notes</button><p id ="RandomNotes"></p><input type="text" id="userInput" placeholder="Enter semitone difference"><br><button onclick="getAnswer()">Submit</button><p id="result"></p>');
        global.document = dom.window.document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;
    });

    it("should update a dom when event is triggered", function() {
        expect(global.document.getElementById("result").innerHTML).toBe('');
        getRandomNotes()
        getAnswer();
        expect(global.document.getElementById("result").innerHTML).not.toBe('');
    });
});