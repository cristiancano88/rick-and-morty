import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/shared/models/location';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {
  
  location: Location | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    if (+this.activatedRoute.snapshot.params.id) {
      this.locationService.getLocationById(this.activatedRoute.snapshot.params.id).subscribe((location: Location) => {
        this.location = location;
      });
    } else {
      this.router.navigate(['/locations']);
    }
  }

}
