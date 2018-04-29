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
});
