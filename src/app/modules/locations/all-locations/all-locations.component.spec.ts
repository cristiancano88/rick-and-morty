import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocationServiceMock } from 'src/test/mocks/services/location.service.mock';
import { LocationService } from '../service/location.service';
import { AllLocationsComponent } from './all-locations.component';


describe('AllLocationsComponent', () => {
  let component: AllLocationsComponent;
  let fixture: ComponentFixture<AllLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLocationsComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: LocationService, useFactory: LocationServiceMock }        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all locations', () => {
    component.ngOnInit();
    expect(component.allLocations.length).toBe(1);
  });

  it('should go to detail', () => {
    spyOn<any>(component['router'], 'navigate');
    component.goToDetail(1);
    expect(component['router'].navigate).toHaveBeenCalledWith(['/locations/location/1']);
  });
});
