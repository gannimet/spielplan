import { GoalRatioPipe } from './goal-ratio.pipe';
import { GameResult } from './models/game';

describe('GameResultPipe', () => {
    let pipe: GoalRatioPipe;

    beforeEach(() => {
        pipe = new GoalRatioPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should transform a complete result', () => {
        let result = new GameResult(2, 3);
        expect(pipe.transform(result)).toEqual('2:3');
    });

    it('should return empty string for incomplete results', () => {
        expect(pipe.transform(new GameResult())).toEqual('');

        let r1 = new GameResult();
        r1.homeGoals = 3;
        expect(pipe.transform(r1)).toEqual('');

        let r2 = new GameResult();
        r2.awayGoals = 1;
        expect(pipe.transform(r2)).toEqual('');
    });
});
