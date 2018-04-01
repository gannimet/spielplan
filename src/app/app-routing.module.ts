import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { GameFormComponent } from './game-form/game-form.component';

const routes: Routes = [{
    path: 'games',
    component: GamesComponent
}, {
    path: 'game/:id',
    component: GameFormComponent
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
