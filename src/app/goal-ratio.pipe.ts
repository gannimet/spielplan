import { Pipe, PipeTransform } from '@angular/core';

import { GameResult } from './models/game';

@Pipe({
    name: 'goalRatio'
})
export class GoalRatioPipe implements PipeTransform {

    transform(value: GameResult): string {
        if (!value || value.homeGoals == null || value.awayGoals == null) {
            return '';
        }

        return `${value.homeGoals}:${value.awayGoals}`;
    }

}
