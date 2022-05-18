import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'characters',
        loadChildren: () => import('./modules/character/character.module').then(m => m.CharacterModule),
      },
      {
        path: 'locations',
        loadChildren: () => import('./modules/locations/location.module').then(m => m.LocationModule),
      },
      {
        path: 'episodes',
        loadChildren: () => import('./modules/episode/episode.module').then(m => m.EpisodeModule),
      }
    ]
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
