import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TetrisComponent } from './games/tetris/tetris.component';
import { DinoComponent } from './games/dino/dino.component';
import { FlappyTilapiaComponent } from './games/flappy-tilapia/flappy-tilapia.component';
import { LoginComponent } from './security/login/login.component';
import { PacManComponent } from './games/pac-man/pac-man.component';
import { SpaceInvadersComponent } from './games/space-invaders/space-invaders.component';
import { BattlecityComponent } from './games/battle-city/battlecity.component';
export const routes: Routes = [
  { path: '', redirectTo: '/battleCity', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tetris', component: TetrisComponent },
  { path: 'dino', component: DinoComponent },
  { path: 'tilapia', component: FlappyTilapiaComponent },
  { path: 'spaceInvaders', component: SpaceInvadersComponent },
  { path: 'battleCity', component: BattlecityComponent },
  { path: 'pac', component: PacManComponent },
  { path: 'login', component: LoginComponent },

  /*   
  { path: 'dino', component: DinoComponent, canActivate: [LoginActivate] }, */
];
