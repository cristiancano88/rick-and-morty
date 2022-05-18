import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Episode } from 'src/app/shared/models/episode';
import { EpisodeService } from '../service/episode.service';

@Component({
  selector: 'app-all-episodes',
  templateUrl: './all-episodes.component.html',
  styleUrls: ['./all-episodes.component.scss']
})
export class AllEpisodesComponent implements OnInit {

  allEpisodes: Episode[] = [];

  constructor(
    private episodesService: EpisodeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.episodesService.getAllEpisodes().subscribe((episodes: Episode[]) => {
      this.allEpisodes = episodes;
    });
  }

  goToDetail(id: number) {
    this.router.navigate([`/episodes/episode/${id}`]);
  }

}
