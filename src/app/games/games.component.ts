import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { GameStorageService } from '../gamestorage.service';
import { Game, GameGrouping, GroupingCriterion } from '../models/game';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

    games: Game[] = [];
    gameGroupings: GameGrouping[] = [];
    groupingCriterion: GroupingCriterion = GroupingCriterion.Group;

    constructor(
        private gameStorage: GameStorageService
    ) { }

    ngOnInit() {
        this.gameStorage
            .getGames()
            .subscribe((game) => {
                this.games.push(game);
            }, undefined, () => {
                this.games.sort((a, b) => {
                    if (a.date < b.date) {
                        return -1;
                    }

                    return 1;
                });

                this.regroupGames();
            });
    }

    regroupGames() {
        this.gameGroupings.length = 0;

        let grouped = _.groupBy(this.games, this.groupingCriterion);

        Object.keys(grouped).forEach(title => {
            this.gameGroupings.push(new GameGrouping(title, grouped[title]));
        });
    }

    isGroupCriterionSelected(): boolean {
        return this.groupingCriterion === GroupingCriterion.Group;
    }

    isDateCriterionSelected(): boolean {
        return this.groupingCriterion === GroupingCriterion.Date;
    }

    isChannelCriterionSelected(): boolean {
        return this.groupingCriterion === GroupingCriterion.Channel;
    }

    isLocationCriterionSelected(): boolean {
        return this.groupingCriterion === GroupingCriterion.Location;
    }

}
