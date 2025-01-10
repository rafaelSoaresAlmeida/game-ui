import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TetrisComponent } from './games/tetris/tetris.component';
import { DinoComponent } from './games/dino/dino.component';
import { FlappyTilapiaComponent } from './games/flappy-tilapia/flappy-tilapia.component';
import { SpaceInvadersComponent } from './space-invaders/space-invaders.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tetris', component: TetrisComponent },
  { path: 'dino', component: DinoComponent },
  { path: 'tilapia', component: FlappyTilapiaComponent },
  { path: 'spaceInvaders', component: SpaceInvadersComponent },

  /*   
  { path: 'dino', component: DinoComponent, canActivate: [LoginActivate] }, */
];
