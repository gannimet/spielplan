import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { GroupTable, GroupTableEntry } from './models/group-table';
import { GroupTableComparator } from './models/table-comparator';
import { Game } from './models/game';

@Injectable()
export class TableCalculatorService {

    groupTable: GroupTable;

    public calculateTableForGroupGames(games: Game[]): GroupTable {
        this.groupTable = new GroupTable();

        for (let game of games) {
            this.groupTable.recordGameData(game);
        }

        this.groupTable.rankTeamEntries(new WorldCupGroupTableComparator());

        return this.groupTable;
    }

}

class WorldCupGroupTableComparator implements GroupTableComparator {

    public compare(a: GroupTableEntry, b: GroupTableEntry): number {
        if (a.points > b.points) {
            return -1;
        } else if (b.points > a.points) {
            return 1;
        }

        if (a.goalDifference > b.goalDifference) {
            return -1;
        } else if (b.goalDifference > a.goalDifference) {
            return 1;
        }

        if (a.goalsFor > b.goalsFor) {
            return -1;
        } else if (b.goalsFor > a.goalsFor) {
            return 1;
        }

        return 0;
    }

    public getIdentityToken(entry: GroupTableEntry): string {
        return `${entry.points}|${entry.goalDifference}|${entry.goalsFor}`;
    }

}
