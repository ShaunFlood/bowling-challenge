let BowlingScoreCard = require('./bowling');

describe('Bowling', () => {
    it('It should return the score from the roll in an array', () => {
        const bowling = new BowlingScoreCard();
        bowling.setRoll(6)
        bowling.setRoll(3)
        expect(bowling.calculateScore()).toEqual(9);
    });
    it('It should record the fact no pins have been knocked over in a frame', () => {
        const bowling = new BowlingScoreCard();
        bowling.setRoll(0)
        bowling.setRoll(0)
        expect(bowling.calculateScore()).toEqual(0);
    })
    it('It should still record the total score with roll 1 having pins down and roll 2 having zero pins down', () => {
        const bowling = new BowlingScoreCard();
        bowling.setRoll(5)
        bowling.setRoll(0)
        expect(bowling.calculateScore()).toEqual(5);
    });
    it('It should caluclate the score of an entire game', () => {
        const bowling = new BowlingScoreCard();
        bowling.setRoll(5)
        bowling.setRoll(2)
        bowling.setRoll(5)
        bowling.setRoll(2)
        bowling.setRoll(5)
        bowling.setRoll(2)
        bowling.setRoll(5)
        bowling.setRoll(2)
        bowling.setRoll(5)
        bowling.setRoll(2)
        bowling.setRoll(5)
        bowling.setRoll(2)
        bowling.setRoll(5)
        bowling.setRoll(2)
        bowling.setRoll(5)
        bowling.setRoll(2)
        bowling.setRoll(5)
        bowling.setRoll(2)
        bowling.setRoll(5)
        bowling.setRoll(2)
        expect(bowling.calculateScore()).toEqual(70);
    });
    it('It should caluclate the bonus of a spare', () => {
        const bowling = new BowlingScoreCard();
        bowling.setRoll(6)
        bowling.setRoll(4)
        bowling.setRoll(2)
        bowling.setRoll(2)
        expect(bowling.calculateScore()).toEqual(16);
    });
    it('It should caluclate the bonus of a strike', () => {
        const bowling = new BowlingScoreCard();
        bowling.setRoll(10)
        bowling.setRoll(2)
        bowling.setRoll(2)
        expect(bowling.calculateScore()).toEqual(18);
    });
});