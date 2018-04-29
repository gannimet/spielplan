import { TestBed, inject } from '@angular/core/testing';

import { EditModeResolve } from './edit-mode.resolve';

describe('EditModeResolve', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EditModeResolve]
        });
    });

    it('should be created', inject([EditModeResolve], (service: EditModeResolve) => {
        expect(service).toBeTruthy();
    }));
});
