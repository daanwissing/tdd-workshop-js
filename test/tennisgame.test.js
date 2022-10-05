const TennisGame = require('../src/tennisgame').TennisGame;

describe('TennisGame', () =>{
    test('Given No Scores, printScore should return Love All', () => {
        let game = new TennisGame();
        expect(game.printScore()).toBe('Love All');
    })
})