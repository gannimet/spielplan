import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import { FormsModule } from "@angular/forms";
import { Game, GameResult } from "../models/game";
import { PipeTransform, Pipe } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { GameStorageService } from "../gamestorage.service";
import { SearchFilterQueryService } from "../search-filter-query.service";
import { DatePipe } from "@angular/common";

@Pipe({ name: 'filter' })
class MockFilterPipe implements PipeTransform {

    transform(games: Game[]): Game[] {
        return games;
    }

}

@Pipe({ name: 'goalRatio' })
class MockGoalRatioPipe implements PipeTransform {

    transform(value: GameResult): string {
        return '';
    }

}

class MockGameStorageService {}

class MockSearchFilterQueryService {}

describe('GamesComponent', () => {
    let component: GamesComponent;
    let fixture: ComponentFixture<GamesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GamesComponent,
                MockFilterPipe,
                MockGoalRatioPipe
            ],
            imports: [
                FormsModule,
                RouterTestingModule
            ],
            providers: [{
                provide: GameStorageService,
                useClass: MockGameStorageService
            }, {
                provide: SearchFilterQueryService,
                useClass: MockSearchFilterQueryService
            }, DatePipe]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GamesComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
