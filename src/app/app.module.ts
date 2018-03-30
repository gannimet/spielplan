import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { AppRoutingModule } from './app-routing.module';
import { GamestorageService } from './gamestorage.service';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameFormComponent } from './game-form/game-form.component';


@NgModule({
    declarations: [
        AppComponent,
        GamesComponent,
        GameFormComponent
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
        GamestorageService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
