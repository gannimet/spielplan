import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameResultInputComponent } from './game-result-input.component';
import { FormsModule } from "@angular/forms";

describe('GameResultInputComponent', () => {
    let component: GameResultInputComponent;
    let fixture: ComponentFixture<GameResultInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GameResultInputComponent ],
            imports: [ FormsModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameResultInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
