import { LocationDetailComponent } from './location-detail/location-detail.component';
import { AllLocationsComponent } from './../locations/all-locations/all-locations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AllLocationsComponent },
  { path: 'location/:id', component: LocationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
