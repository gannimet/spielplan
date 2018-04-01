import { Component, OnInit } from '@angular/core';

import { Game } from '../models/game';
import { GameStorageService } from '../gamestorage.service';

@Component({
    selector: 'app-game-form',
    templateUrl: './game-form.component.html',
    styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

    groups: string[] = [
        'Group A', 'Group B', 'Group C', 'Group D',
        'Group E', 'Group F', 'Group G', 'Group H',
        'Round of 16', 'Quarter Final', 'Semi Final',
        'Final'
    ];
    competitions: string[] = [
        'FIFA World Cup 2018', 'UEFA Champions League'
    ];
    channels: string[] = ['ARD', 'ZDF', 'RTL', 'Sat1'];
    teams: string[] = ['Deutschland', 'Südkorea', 'Schweden', 'Mexiko']
    game: Game = new Game();

    constructor(private gameStore: GameStorageService) { }

    ngOnInit() {
    }

    saveGame() {
        this.gameStore.storeGame(this.game);
    }

    get gameDump() {
        return JSON.stringify(this.game).trim();
    }

}
