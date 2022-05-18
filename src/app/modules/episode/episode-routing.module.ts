import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { AllEpisodesComponent } from './all-episodes/all-episodes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AllEpisodesComponent },
  { path: 'episode/:id', component: EpisodeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
