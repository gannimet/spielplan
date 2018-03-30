export class Game {

    constructor(
        public homeTeam: string,
        public awayTeam: string,
        public competition: string,
        public date: Date,
        public hasExactTime?: boolean,
        public group?: string,
        public channel?: string
    ) {}

}
