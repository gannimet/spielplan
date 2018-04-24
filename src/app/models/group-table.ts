import * as _ from 'lodash';

import { Game, GameResultType } from './game';
import { GroupTableComparator } from './table-comparator';

export class GroupTable {

    public tableEntries: GroupTableEntry[] = [];
    private games: Game[] = [];

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

        // Remember game for later use
        this.games.push(game);

        // Collect actual data from the game
        homeTeamEntry.goalsFor += game.result.homeGoals;
        homeTeamEntry.goalsAgainst += game.result.awayGoals;
        awayTeamEntry.goalsFor += game.result.awayGoals;
        awayTeamEntry.goalsAgainst += game.result.homeGoals;

        if (game.result.resultType === GameResultType.HomeWin) {
            homeTeamEntry.wins++;
            awayTeamEntry.losses++;
        } else if (game.result.resultType === GameResultType.Draw) {
            homeTeamEntry.draws++;
            awayTeamEntry.draws++;
        } else {
            awayTeamEntry.wins++;
            homeTeamEntry.losses++;
        }
    }

    public rankTeamEntries(comparator: GroupTableComparator) {
        this._rankTeamEntries(comparator, true);
    }

    private _rankTeamEntries(comparator: GroupTableComparator, firstLevel: boolean) {
        let firstLevelRankedEntries = this.tableEntries.sort(comparator.compare);

        // if (firstLevel) {
        //     let identityGroups = _.groupBy(firstLevelRankedEntries, comparator.getIdentityToken);
        //
        //     Object.keys(identityGroups).forEach(identifier => {
        //         let groupEntries = identityGroups[identifier];
        //
        //         if (groupEntries.length > 1) {
        //             // Collect all games of affected teams and rank this "mini league" again
        //             let relevantTeams = groupEntries.map(entry => entry.team);
        //             let relevantGames = this.getAllGamesWithTeams(relevantTeams);
        //             let miniLeague = new GroupTable();
        //
        //             for (let game of relevantGames) {
        //                 miniLeague.recordGameData(game);
        //             }
        //
        //             miniLeague._rankTeamEntries(comparator, false);
        //         }
        //     });
        // }

        this.tableEntries = firstLevelRankedEntries;
    }

    private getEntryForTeam(teamName: string): GroupTableEntry {
        return _.find(this.tableEntries, { team: teamName });
    }

    private getAllGamesWithTeams(teams: string[]): Game[] {
        return this.games.filter(game => {
            return _.includes(teams, game.homeTeam) ||
                _.includes(teams, game.awayTeam);
        });
    }

}

export class GroupTableEntry {

    public goalsFor: number = 0;
    public goalsAgainst: number = 0;
    public position: number = 0;
    public wins: number = 0;
    public draws: number = 0;
    public losses: number = 0;

    constructor(
        public readonly team: string
    ) {}

    get goalDifference(): number {
        return this.goalsFor - this.goalsAgainst;
    }

    get played(): number {
        return this.wins + this.draws + this.losses;
    }

    get points(): number {
        return 3 * this.wins + this.draws;
    }

}
