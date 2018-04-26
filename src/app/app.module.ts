import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './routing/app-routing.module';
import { GameStorageService } from './gamestorage.service';
import { TableCalculatorService } from './table-calculator.service';
import { SearchFilterQueryService } from './search-filter-query.service';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameResolve } from './routing/game.resolve';
import { EditModeResolve } from './routing/edit-mode.resolve';
import { NaviComponent } from './navi/navi.component';
import { DeleteGameModalComponent } from './delete-game-modal/delete-game-modal.component';
import { GameResultInputComponent } from './game-result-input/game-result-input.component';
import { GoalRatioPipe } from './goal-ratio.pipe';
import { TableCalculatorComponent } from './table-calculator/table-calculator.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        GamesComponent,
        GameFormComponent,
        NaviComponent,
        DeleteGameModalComponent,
        GameResultInputComponent,
        GoalRatioPipe,
        TableCalculatorComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        TypeaheadModule.forRoot(),
        NgbModule.forRoot()
    ],
    providers: [
        GameStorageService,
        TableCalculatorService,
        SearchFilterQueryService,
        GameResolve,
        EditModeResolve,
        DatePipe
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        DeleteGameModalComponent
    ]
})
export class AppModule { }
