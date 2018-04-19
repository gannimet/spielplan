import { Pipe, PipeTransform } from '@angular/core';

import { GameResult } from './models/game';

@Pipe({
    name: 'gameResult'
})
export class GameResultPipe implements PipeTransform {

    transform(value: GameResult, args?: any): string {
        if (!value || value.homeGoals == null || value.awayGoals == null) {
            return '';
        }

        return `${value.homeGoals}:${value.awayGoals}`;
    }

}
