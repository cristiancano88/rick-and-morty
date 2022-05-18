import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode } from 'src/app/shared/models/episode';
import { EpisodeService } from '../service/episode.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

  episode: Episode | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private characterService: EpisodeService
  ) { }

  ngOnInit(): void {
    if (+this.activatedRoute.snapshot.params.id) {
      this.characterService.getEpisodeById(this.activatedRoute.snapshot.params.id).subscribe((episode: Episode) => {
        this.episode = episode;
      });
    } else {
      this.router.navigate(['/episodes']);
    }
  }

}
