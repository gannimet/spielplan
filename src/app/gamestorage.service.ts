import { Injectable } from '@angular/core';

import { Game } from './models/game';

@Injectable()
export class GamestorageService {

  constructor() { }

  public getGames(): Game[] {
      try {
          return JSON.parse(localStorage.getItem('games') || '[]');
      } catch (e) {
          return [];
      }
  }

  public storeGame(game: Game) {
      let oldValue = this.getGames();

      localStorage.setItem('games', JSON.stringify(
          oldValue.concat([game])
      ));
  }

}
