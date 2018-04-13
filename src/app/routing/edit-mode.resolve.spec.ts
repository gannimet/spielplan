import { TestBed, inject } from '@angular/core/testing';

import { EditMode.ResolveService } from './edit-mode.resolve.service';

describe('EditMode.ResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditMode.ResolveService]
    });
  });

  it('should be created', inject([EditMode.ResolveService], (service: EditMode.ResolveService) => {
    expect(service).toBeTruthy();
  }));
});
