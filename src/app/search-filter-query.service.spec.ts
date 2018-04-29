import { TestBed, inject } from '@angular/core/testing';

import { SearchFilterQueryService } from './search-filter-query.service';

describe('SearchFilterQueryService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SearchFilterQueryService]
        });
    });

    it('should be created', inject([SearchFilterQueryService], (service: SearchFilterQueryService) => {
        expect(service).toBeTruthy();
    }));
});
