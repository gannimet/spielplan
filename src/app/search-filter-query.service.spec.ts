import { TestBed, inject } from '@angular/core/testing';

import { SearchFilterQueryServiceService } from './search-filter-query-service.service';

describe('SearchFilterQueryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchFilterQueryServiceService]
    });
  });

  it('should be created', inject([SearchFilterQueryServiceService], (service: SearchFilterQueryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
