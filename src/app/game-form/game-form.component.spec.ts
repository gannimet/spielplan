import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { GameFormComponent } from './game-form.component';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { Component } from "@angular/core";
import { GameStorageService } from "../gamestorage.service";
import { ActivatedRoute, Data, Params, Router, RouterModule } from "@angular/router";
import { Game } from "../models/game";
import { RouterTestingModule } from "@angular/router/testing";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

class MockGameStorageService {}

@Component({
    selector: 'app-game-result-input',
    template: ''
})
class MockGameResultComponent {}

describe('GameFormComponent', () => {
    let component: GameFormComponent;
    let fixture: ComponentFixture<GameFormComponent>;

    beforeEach(async(() => {
        let mockActivateRoute = {
            snapshot: {
                data: {
                    isEditMode: true, game: new Game()
                }
            }
        };

        let mockRouter = {
            navigate: jasmine.createSpy('navigate')
        };

        let mockNgbModal = {};

        TestBed.configureTestingModule({
            declarations: [
                GameFormComponent,
                MockGameResultComponent
            ],
            providers: [{
                provide: GameStorageService,
                useClass: MockGameStorageService
            }, {
                provide: ActivatedRoute,
                useValue: mockActivateRoute
            }, {
                provide: Router,
                useValue: mockRouter
            }, {
                provide: NgbModal,
                useValue: mockNgbModal
            }],
            imports: [
                FormsModule,
                RouterModule,
                RouterTestingModule,
                TypeaheadModule.forRoot(),
                BsDatepickerModule.forRoot(),
                TimepickerModule.forRoot()
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameFormComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
