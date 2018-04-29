import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DeleteGameModalComponent } from './delete-game-modal.component';

describe('DeleteGameModalComponent', () => {
    let component: DeleteGameModalComponent;
    let fixture: ComponentFixture<DeleteGameModalComponent>;

    beforeEach(async(() => {
        let mockActiveModal = {};

        TestBed.configureTestingModule({
            declarations: [ DeleteGameModalComponent ],
            providers: [{
                provide: NgbActiveModal,
                useValue: mockActiveModal
            }]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteGameModalComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
