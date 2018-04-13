import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from '../games/games.component';
import { GameFormComponent } from '../game-form/game-form.component';
import { GameResolve } from './game.resolve';
import { EditModeResolve } from './edit-mode.resolve';

const routes: Routes = [{
    path: 'games',
    component: GamesComponent
}, {
    path: 'game/new',
    component: GameFormComponent,
    resolve: {
        isEditMode: EditModeResolve
    }
}, {
    path: 'game/:id',
    component: GameFormComponent,
    resolve: {
        game: GameResolve,
        isEditMode: EditModeResolve
    }
}, {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
