import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Game } from '../models/game';
import { GameStorageService } from '../gamestorage.service';

@Injectable()
export class GameResolve implements Resolve<Game> {

  constructor(
      private gameStore: GameStorageService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Game> {
      let gameId = route.paramMap.get('id');

      return this.gameStore.getGameById(gameId);
  }

}
