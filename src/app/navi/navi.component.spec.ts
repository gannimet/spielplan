import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviComponent } from './navi.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { SearchFilterQueryService } from "../search-filter-query.service";

class MockSearchFilterQueryService {}

describe('NaviComponent', () => {
    let component: NaviComponent;
    let fixture: ComponentFixture<NaviComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NaviComponent ],
            imports: [
                RouterTestingModule,
                FormsModule
            ],
            providers: [{
                provide: SearchFilterQueryService,
                useClass: MockSearchFilterQueryService
            }]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NaviComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
