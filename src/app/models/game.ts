import { UUID } from 'angular2-uuid';

export class Game {

    constructor(
        public homeTeam?: string,
        public awayTeam?: string,
        public competition?: string,
        public date?: Date,
        public group?: string,
        public channel?: string,
        public location?: string,
        public result?: GameResult,
        public readonly id?: string
    ) {
        if (id) {
            this.id = id;
        } else {
            this.id = UUID.UUID();
        }

        if (!result) {
            this.result = new GameResult();
            this.result.homeGoals = 5;
            this.result.awayGoals = 2;
        }
    }

    get baseDate(): Date {
        if (this.date) {
            return new Date(
                this.date.getFullYear(),
                this.date.getMonth(),
                this.date.getDate(),
                0, 0, 0
            );
        }
    }

}

export class GameResult {

    public homeGoals: number;
    public awayGoals: number;

}

export class GameGrouping {

    constructor(
        public title: string,
        public games: Game[]
    ) {}

}

export enum GroupingCriterion {

    Group = 'group',
    Date = 'baseDate',
    Channel = 'channel',
    Location = 'location'

}
