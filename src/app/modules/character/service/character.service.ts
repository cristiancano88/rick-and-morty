import { Character } from './../../../shared/models/character';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly characterUrl = `${environment.apiUrl}/character`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get(this.characterUrl).pipe(map((response: any) => response.results));
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.characterUrl}/${id}`);
  }
}
