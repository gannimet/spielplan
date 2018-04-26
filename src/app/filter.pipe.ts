import { Pipe, PipeTransform } from '@angular/core';

import { Game } from './models/game';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(games: Game[], query: string): Game[] {
        if (!query || query === '') {
            return games;
        }

        let lowerCaseQuery = query.toLowerCase();

        return games.filter(game => {
            return game.homeTeam.toLowerCase().includes(lowerCaseQuery) ||
                game.awayTeam.toLowerCase().includes(lowerCaseQuery) ||
                game.location.toLowerCase().includes(lowerCaseQuery) ||
                game.group.toLowerCase().includes(lowerCaseQuery) ||
                (game.channel && game.channel.toLowerCase().includes(lowerCaseQuery));
        });
    }

}
