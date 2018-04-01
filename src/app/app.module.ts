import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { AppRoutingModule } from './routing/app-routing.module';
import { GameStorageService } from './gamestorage.service';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameResolve } from './routing/game.resolve';
import { NaviComponent } from './navi/navi.component';

@NgModule({
    declarations: [
        AppComponent,
        GamesComponent,
        GameFormComponent,
        NaviComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        TypeaheadModule.forRoot()
    ],
    providers: [
        GameStorageService,
        GameResolve
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
