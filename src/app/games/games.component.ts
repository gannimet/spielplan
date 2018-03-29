import { Component, OnInit } from '@angular/core';

import { GamestorageService } from '../gamestorage.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private gameStorage: GamestorageService) { }

  ngOnInit() {
      this.gameStorage.storeGame('Schweden', 'Südkorea');
  }

}
