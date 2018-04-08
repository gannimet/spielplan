import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Game } from '../models/game';

@Component({
    selector: 'app-delete-game-modal',
    templateUrl: './delete-game-modal.component.html',
    styleUrls: ['./delete-game-modal.component.scss']
})
export class DeleteGameModalComponent implements OnInit {

    @Input() game: Game;

    constructor(private activeModal: NgbActiveModal) { }

    ngOnInit() {
    }

    deleteGame() {
        this.activeModal.close();
    }

}
