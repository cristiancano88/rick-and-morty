import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AllEpisodesComponent } from './all-episodes/all-episodes.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodeRoutingModule } from './episode-routing.module';

@NgModule({
  declarations: [
    AllEpisodesComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule
  ]
})
export class EpisodeModule { }
