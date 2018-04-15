import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import { Game } from './models/game';

@Injectable()
export class GameStorageService {

    constructor() { }

    public getGames(): Observable<Game> {
        let games: Game[] = [];

        Object.keys(localStorage).forEach((gameId) => {
            let game = this.constructGameObject(
                JSON.parse(localStorage.getItem(gameId))
            );

            games.push(game);
        });

        return Observable.of(...games);
    }

    public getGameById(id: string): Observable<Game> {
        let game = this.constructGameObject(
            JSON.parse(localStorage.getItem(id))
        );

        return Observable.of(game);
    }

    public storeGame(game: Game): Observable<boolean> {
        localStorage.setItem(game.id, JSON.stringify(game));

        return Observable.of(true);
    }

    public getAllTeams(): Observable<string> {
        return Observable.merge(
            this.getAllValuesForKey('homeTeam'),
            this.getAllValuesForKey('awayTeam')
        ).distinct();
    }

    public getAllCompetitions(): Observable<string> {
        return this.getAllValuesForKey('competition');
    }

    public getAllGroups(): Observable<string> {
        return this.getAllValuesForKey('group');
    }

    public getAllChannels(): Observable<string> {
        return this.getAllValuesForKey('channel');
    }

    public getAllLocations(): Observable<string> {
        return this.getAllValuesForKey('location');
    }

    private getAllValuesForKey(key: string): Observable<string> {
        return this
            .getGames()
            .map(game => {
                return game[key];
            })
            .distinct();
    }

    private constructGameObject(jsonObj: any): Game {
        return new Game(
            jsonObj.homeTeam,
            jsonObj.awayTeam,
            jsonObj.competition,
            new Date(jsonObj.date),
            jsonObj.group,
            jsonObj.channel,
            jsonObj.location,
            jsonObj.id
        );
    }

}
