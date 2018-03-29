import { Injectable } from '@angular/core';

@Injectable()
export class GamestorageService {

  constructor() { }

  public getGames() {
      try {
          return JSON.parse(localStorage.getItem('games'));
      } catch (e) {
          return [];
      }
  }

  public storeGame(homeTeam: string, awayTeam: string) {
      let oldValue = this.getGames();

      localStorage.setItem('games', JSON.stringify(
          oldValue.concat([{
              homeTeam: homeTeam, awayTeam: awayTeam
          }])
      ));
  }

}
