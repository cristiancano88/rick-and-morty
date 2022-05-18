import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocationServiceMock } from 'src/test/mocks/services/location.service.mock';
import { LocationService } from '../service/location.service';
import { LocationDetailComponent } from './location-detail.component';


describe('LocationDetailComponent', () => {
  let component: LocationDetailComponent;
  let fixture: ComponentFixture<LocationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDetailComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: LocationService, useFactory: LocationServiceMock }        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a location by id', async () => {    
    component['activatedRoute'].snapshot.params.id = 10;
    component.ngOnInit();

    expect(component.location?.name).toBe('Venzenulon 7');
  });

  it('should go to locations secction, if id is zero', () => {
    spyOn<any>(component['router'], 'navigate');
    
    component['activatedRoute'].snapshot.params.id = 0;
    component.ngOnInit();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/locations']);
  });
});
