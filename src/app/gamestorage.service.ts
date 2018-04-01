import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import * as _ from 'lodash';

import { Game } from './models/game';

@Injectable()
export class GameStorageService {

    constructor() { }

    public getGames(): Observable<Game[]> {
        try {
            return of(
                JSON.parse(localStorage.getItem('games') || '[]')
            );
        } catch (e) {
            return of([]);
        }
    }

    public getGameById(id: string): Observable<Game> {
        return this
            .getGames()
            .map(games => {
                return games.filter(game => {
                    return game.id === id;
                })[0];
            });
    }

    public storeGame(game: Game): Observable<Game[]> {
        let sub = new Subject<Game[]>();

        this.getGames().subscribe(oldGames => {
            let newGames = oldGames.concat([game]);

            localStorage.setItem('games', JSON.stringify(newGames));
            sub.next(newGames);
        });

        return sub.asObservable();
    }

}
