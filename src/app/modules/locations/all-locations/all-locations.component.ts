import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from 'src/app/shared/models/location';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-all-locations',
  templateUrl: './all-locations.component.html',
  styleUrls: ['./all-locations.component.scss']
})
export class AllLocationsComponent implements OnInit {

  allLocations: Location[] = [];

  constructor(
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.locationService.getAllLocation().subscribe((location: Location[]) => {
      this.allLocations = location;
    });
  }

  goToDetail(id: number) {
    this.router.navigate([`/locations/location/${id}`]);
  }

}
