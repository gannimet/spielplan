import { FilterPipe } from './filter.pipe';
import { Game } from "./models/game";

describe('FilterPipe', () => {
    let g1 = new Game('A', 'B', 'CL', new Date(2018, 4, 14), 'F', 'ARD', 'Ulm');
    let g2 = new Game('C', 'D', 'CL', new Date(2018, 4, 14), 'F', 'ZDF', 'Rio');
    let g3 = new Game('B', 'C', 'CL', new Date(2018, 4, 19), 'H', 'RTL', 'Ulm');
    let g4 = new Game('D', 'A', 'CL', new Date(2018, 4, 19), 'H', 'ZDF', 'Rio');
    let g5 = new Game('A', 'C', 'CL', new Date(2018, 4, 24), 'E', 'RTL', 'Rio');
    let g6 = new Game('B', 'D', 'CL', new Date(2018, 4, 24), 'A', 'ARD', 'Ulm');
    let games: Game[] = [g1, g2, g3, g4, g5, g6];

    it('create an instance', () => {
        const pipe = new FilterPipe();

        expect(pipe).toBeTruthy();
    });

    it('should filter correctly with uppercase query', () => {
        const pipe =  new FilterPipe();
        let filteredGames = pipe.transform(games, 'A');

        expect(filteredGames).toBeArrayOfSize(4);
        expect(filteredGames).toContain(g1);
        expect(filteredGames).toContain(g4);
        expect(filteredGames).toContain(g5);
        expect(filteredGames).toContain(g6);
    });

    it('should filter correctly with lowercase query', () => {
        const pipe =  new FilterPipe();
        let filteredGames = pipe.transform(games, 'a');

        expect(filteredGames).toBeArrayOfSize(4);
        expect(filteredGames).toContain(g1);
        expect(filteredGames).toContain(g4);
        expect(filteredGames).toContain(g5);
        expect(filteredGames).toContain(g6);
    });
});
