import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Game } from '../models/game';
import { GameStorageService } from '../gamestorage.service';
import { DeleteGameModalComponent } from '../delete-game-modal/delete-game-modal.component';

@Component({
    selector: 'app-game-form',
    templateUrl: './game-form.component.html',
    styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

    groups: string[] = [];
    competitions: string[] = [];
    channels: string[] = [];
    teams: string[] = [];
    game: Game = new Game();

    constructor(
        private gameStore: GameStorageService,
        private route: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        let resolvedGame = this.route.snapshot.data['game'];

        // Initialize the UI with the resolved game
        // or leave it empty if this page was called via
        // /game/new
        if (resolvedGame) {
            this.game = resolvedGame;
        }

        this.gameStore
            .getAllTeams()
            .subscribe(team => {
                this.teams.push(team);
            });
        this.gameStore
            .getAllCompetitions()
            .subscribe(competition => {
                this.competitions.push(competition);
            });
        this.gameStore
            .getAllGroups()
            .subscribe(group => {
                this.groups.push(group);
            });
        this.gameStore
            .getAllChannels()
            .subscribe(channel => {
                this.channels.push(channel);
            });
    }

    saveGame() {
        this.gameStore
            .storeGame(this.game)
            .subscribe((success) => {
                this.router.navigate(['games']);
            });
    }

    confirmGameDeletion() {
        const modal = this.modalService.open(DeleteGameModalComponent);
        modal.componentInstance.game = this.game;

        modal.result.then(this.deleteGame);
    }

    get gameDump() {
        return JSON.stringify(this.game).trim();
    }

    private deleteGame() {

    }

}
