import { LocationDetailComponent } from './location-detail/location-detail.component';
import { AllLocationsComponent } from './../locations/all-locations/all-locations.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRoutingModule } from './location-routing.module';


@NgModule({
  declarations: [
    AllLocationsComponent,    
    LocationDetailComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
