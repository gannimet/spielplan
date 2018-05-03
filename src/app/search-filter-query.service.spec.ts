import { TestBed, inject, async } from '@angular/core/testing';

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

    it('should emit change events when queryChanged is called', async(inject([SearchFilterQueryService], (service: SearchFilterQueryService) => {
        service.change.subscribe(value => {
            expect(value).toEqual('testValue');
        });

        service.queryChanged('testValue');
    })));
});
