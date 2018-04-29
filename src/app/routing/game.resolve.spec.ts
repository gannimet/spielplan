import { TestBed, inject } from '@angular/core/testing';

import { GameResolve } from './game.resolve';
import { GameStorageService } from "../gamestorage.service";

class MockGameStorageService {}

describe('GameResolve', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                GameResolve,
                {
                    provide: GameStorageService,
                    useClass: MockGameStorageService
                }
            ]
        });
    });

    it('should be created', inject([GameResolve], (service: GameResolve) => {
        expect(service).toBeTruthy();
    }));
});
