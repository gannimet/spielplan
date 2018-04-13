import { UUID } from 'angular2-uuid';

export class Game {

    readonly id: string;

    constructor(
        public homeTeam?: string,
        public awayTeam?: string,
        public competition?: string,
        public date?: Date,
        public hasExactTime?: boolean,
        public group?: string,
        public channel?: string,
        public location?: string
    ) {
        this.id = UUID.UUID();
    }

}

export class GameGrouping {

    constructor(
        public title: string,
        public games: Game[]
    ) {}

}

export enum GroupingCriterion {

    Group = 'group',
    Date = 'date',
    Channel = 'channel',
    Location = 'location'

}
