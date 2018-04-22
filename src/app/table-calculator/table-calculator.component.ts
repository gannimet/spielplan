import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GameStorageService } from '../gamestorage.service';
import { TableCalculatorService } from '../table-calculator.service';
import { Game } from '../models/game';
import { GroupTable } from '../models/group-table';

@Component({
    selector: 'app-table-calculator',
    templateUrl: './table-calculator.component.html',
    styleUrls: ['./table-calculator.component.scss']
})
export class TableCalculatorComponent implements OnInit {

    allGroups$: Observable<string[]>;
    groupTable: GroupTable;

    constructor(
        private gameStore: GameStorageService,
        private tableCalculator: TableCalculatorService
    ) { }

    ngOnInit() {
        this.allGroups$ = this.gameStore
            .getAllGroups()
            .toArray()
            .map(groups => groups.sort());
    }

    public groupSelectionChanged(newGroup) {
        let theGames: Game[] = [];

        this.gameStore
            .getAllGamesFromGroup(newGroup)
            .subscribe(
                game => theGames.push(game),
                undefined,
                () => {
                    // Completed collecting group games
                    this.groupTable = this.tableCalculator
                        .calculateTableForGroupGames(theGames);
                }
            );
    }

}
