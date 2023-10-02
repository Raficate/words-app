import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'title-screen',
    pathMatch: 'full'
  },
  {
    path: 'title-screen',
    loadChildren: () => import('./title-screen/title-screen.module').then( m => m.TitleScreenPageModule)
  },
  {
    path: 'new-session/:id',
    loadChildren: () => import('./new-session/new-session.module').then( m => m.NewSessionPageModule)
  },
  {
    path: 'join-session',
    loadChildren: () => import('./join-session/join-session.module').then( m => m.JoinSessionPageModule)
  },
  {
    path: 'teams-view/:id',
    loadChildren: () => import('./teams-view/teams-view.module').then( m => m.TeamsViewPageModule)
  },
  {
    path: 'wait-teams/:id',
    loadChildren: () => import('./wait-teams/wait-teams.module').then( m => m.WaitTeamsPageModule)
  },
  {
    path: 'rounds/:id',
    loadChildren: () => import('./rounds/rounds.module').then( m => m.RoundsPageModule)
  },
  {
    path: 'guess-team/:id',
    loadChildren: () => import('./guess-team/guess-team.module').then( m => m.GuessTeamPageModule)
  },
  {
    path: 'count-team/:id',
    loadChildren: () => import('./count-team/count-team.module').then( m => m.CountTeamPageModule)
  },
  {
    path: 'teams-view-alt/:id',
    loadChildren: () => import('./teams-view-alt/teams-view-alt.module').then( m => m.TeamsViewAltPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
