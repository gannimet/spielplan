import { Component, OnInit } from '@angular/core';

import { GameStorageService } from '../gamestorage.service';
import { Game } from '../models/game';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

    games: Game[];

    constructor(private gameStorage: GameStorageService) { }

    ngOnInit() {
        this.gameStorage
            .getGames()
            .subscribe(games => this.games = games);
    }

}
