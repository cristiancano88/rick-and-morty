import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from 'src/app/shared/models/location';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly locationUrl = `${environment.apiUrl}/location`;

  constructor(private http: HttpClient) { }

  getAllLocation(): Observable<Location[]> {
    return this.http.get(this.locationUrl).pipe(map((response: any) => response.results));
  }

  getLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.locationUrl}/${id}`);
  }
}
