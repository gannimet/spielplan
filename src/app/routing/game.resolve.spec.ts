import { TestBed, inject } from '@angular/core/testing';

import { Game.ResolveService } from './game.resolve.service';

describe('Game.ResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Game.ResolveService]
    });
  });

  it('should be created', inject([Game.ResolveService], (service: Game.ResolveService) => {
    expect(service).toBeTruthy();
  }));
});
