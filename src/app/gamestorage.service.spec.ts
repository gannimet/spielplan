import { TestBed, inject } from '@angular/core/testing';

import { GameStorageService } from './gamestorage.service';

describe('GameStorageService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GameStorageService]
        });
    });

    it('should be created', inject([GameStorageService], (service: GameStorageService) => {
        expect(service).toBeTruthy();
    }));
});
