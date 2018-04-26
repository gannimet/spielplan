import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';

import { GameStorageService } from '../gamestorage.service';
import { Game, GameGrouping, GroupingCriterion } from '../models/game';
import { SearchFilterQueryService } from '../search-filter-query.service';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

    games: Game[] = [];
    gameGroupings: GameGrouping[] = [];
    groupingCriterion: GroupingCriterion = GroupingCriterion.Group;
    filterQuery: string;

    constructor(
        private gameStorage: GameStorageService,
        private queryService: SearchFilterQueryService,
        private datePipe: DatePipe
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

        this.queryService.change.subscribe(newQuery => {
            this.filterQuery = newQuery;
        });
    }

    public regroupGames() {
        this.gameGroupings.length = 0;

        let grouped = _.groupBy(this.games, this.groupingCriterion);

        Object.keys(grouped).forEach(identifier => {
            this.gameGroupings.push(new GameGrouping(
                this.getGroupTitle(identifier), grouped[identifier]
            ));
        });
    }

    public isGroupCriterionSelected(): boolean {
        return this.groupingCriterion === GroupingCriterion.Group;
    }

    public isDateCriterionSelected(): boolean {
        return this.groupingCriterion === GroupingCriterion.Date;
    }

    public isChannelCriterionSelected(): boolean {
        return this.groupingCriterion === GroupingCriterion.Channel;
    }

    public isLocationCriterionSelected(): boolean {
        return this.groupingCriterion === GroupingCriterion.Location;
    }

    private getGroupTitle(groupIdentifier): string {
        if (groupIdentifier === 'undefined') {
            return 'Keine Angabe';
        }

        if (this.isDateCriterionSelected()) {
            return this.datePipe.transform(groupIdentifier, 'EEEE, MMMM dd');
        }

        return groupIdentifier;
    }

}
