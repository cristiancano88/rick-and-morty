import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EpisodeServiceMock } from 'src/test/mocks/services/episode.service.mock';
import { EpisodeService } from '../service/episode.service';
import { EpisodeDetailComponent } from './episode-detail.component';


describe('EpisodeDetailComponent', () => {
  let component: EpisodeDetailComponent;
  let fixture: ComponentFixture<EpisodeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeDetailComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: EpisodeService, useFactory: EpisodeServiceMock }        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a episode by id', async () => {    
    component['activatedRoute'].snapshot.params.id = 10;
    component.ngOnInit();

    expect(component.episode?.name).toBe('Close Rick-counters of the Rick Kind');
  });

  it('should go to episodes secction, if id is zero', () => {
    spyOn<any>(component['router'], 'navigate');
    
    component['activatedRoute'].snapshot.params.id = 0;
    component.ngOnInit();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/episodes']);
  });
});
