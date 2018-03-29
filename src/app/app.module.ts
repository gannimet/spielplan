import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { GamestorageService } from './gamestorage.service';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';


@NgModule({
    declarations: [
        AppComponent,
        GamesComponent,
        GameComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot()
    ],
    providers: [
        GamestorageService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
