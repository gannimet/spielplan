import * as _ from 'lodash';

import { Game, GameResultType } from './game';

export class GroupTable {

    public tableEntries: GroupTableEntry[] = [];

    public recordGameData(game: Game) {
        let homeTeamEntry = this.getEntryForTeam(game.homeTeam);
        let awayTeamEntry = this.getEntryForTeam(game.awayTeam);

        // If any of the teams entries wasn't already in the list,
        // create it nad put it in there
        if (!homeTeamEntry) {
            homeTeamEntry = new GroupTableEntry(game.homeTeam);
            this.tableEntries.push(homeTeamEntry);
        }

        if (!awayTeamEntry) {
            awayTeamEntry = new GroupTableEntry(game.awayTeam);
            this.tableEntries.push(awayTeamEntry);
        }

        // Only record data from the game if it has
        // already been played
        if (!game.result.isComplete) {
            return;
        }

        homeTeamEntry.goalsFor += game.result.homeGoals;
        homeTeamEntry.goalsAgainst += game.result.awayGoals;
        awayTeamEntry.goalsFor += game.result.awayGoals;
        awayTeamEntry.goalsAgainst += game.result.homeGoals;

        if (game.result.resultType === GameResultType.HomeWin) {
            homeTeamEntry.points += 3;
        } else if (game.result.resultType === GameResultType.Draw) {
            homeTeamEntry.points += 1;
            awayTeamEntry.points += 1;
        } else {
            awayTeamEntry.points += 3;
        }
    }

    public rankTeamEntries(sortFn: (a: GroupTableEntry, b: GroupTableEntry) => number) {
        this.tableEntries = this.tableEntries.sort(sortFn);
    }

    private getEntryForTeam(teamName: string): GroupTableEntry {
        return _.find(this.tableEntries, { team: teamName });
    }

}

export class GroupTableEntry {

    public points: number = 0;
    public goalsFor: number = 0;
    public goalsAgainst: number = 0;
    public position: number = 0;

    constructor(
        public readonly team: string
    ) {}

    get goalDifference(): number {
        return this.goalsFor - this.goalsAgainst;
    }

}
