import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Episode } from 'src/app/shared/models/episode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private readonly episodeUrl = `${environment.apiUrl}/episode`;

  constructor(private http: HttpClient) { }

  getAllEpisodes(): Observable<Episode[]> {
    return this.http.get(this.episodeUrl).pipe(map((response: any) => response.results));
  }

  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.episodeUrl}/${id}`);
  }
}
