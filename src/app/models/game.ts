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
        public result: GameResult = new GameResult(),
        public readonly id?: string
    ) {
        if (id) {
            this.id = id;
        } else {
            this.id = UUID.UUID();
        }
    }

    public static constructGameObject(jsonObj: any): Game {
        return new Game(
            jsonObj.homeTeam,
            jsonObj.awayTeam,
            jsonObj.competition,
            new Date(jsonObj.date),
            jsonObj.group,
            jsonObj.channel,
            jsonObj.location,
            Game.constructResultObject(jsonObj.result),
            jsonObj.id
        );
    }

    private static constructResultObject(jsonObj: any): GameResult {
        let theResult = new GameResult();;

        if (jsonObj) {
            theResult.homeGoals = jsonObj.homeGoals;
            theResult.awayGoals = jsonObj.awayGoals;
        }

        return theResult;
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

    constructor(
        public homeGoals?: number,
        public awayGoals?: number
    ) {}

    get resultType(): GameResultType {
        if (!this.isComplete) {
            return undefined;
        }

        if (this.homeGoals > this.awayGoals) {
            return GameResultType.HomeWin;
        } else if (this.homeGoals < this.awayGoals) {
            return GameResultType.AwayWin;
        } else {
            return GameResultType.Draw;
        }
    }

    get isComplete(): boolean {
        return this.homeGoals != null && this.awayGoals != null;
    }

}

export enum GameResultType {

    HomeWin, AwayWin, Draw

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
