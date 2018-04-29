import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCalculatorComponent } from './table-calculator.component';
import { FormsModule } from "@angular/forms";
import { GameStorageService } from "../gamestorage.service";
import { TableCalculatorService } from "../table-calculator.service";

class MockGameStorageService {}

class MockTableCalculatorService {}

describe('TableCalculatorComponent', () => {
    let component: TableCalculatorComponent;
    let fixture: ComponentFixture<TableCalculatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TableCalculatorComponent ],
            providers: [{
                provide: GameStorageService,
                useClass: MockGameStorageService
            }, {
                provide: TableCalculatorService,
                useClass: MockTableCalculatorService
            }],
            imports: [ FormsModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableCalculatorComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
