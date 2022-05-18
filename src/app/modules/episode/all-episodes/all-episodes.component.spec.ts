import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EpisodeServiceMock } from 'src/test/mocks/services/episode.service.mock';
import { EpisodeService } from '../service/episode.service';
import { AllEpisodesComponent } from './all-episodes.component';


describe('AllEpisodesComponent', () => {
  let component: AllEpisodesComponent;
  let fixture: ComponentFixture<AllEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEpisodesComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: EpisodeService, useFactory: EpisodeServiceMock }        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all episodes', () => {
    component.ngOnInit();
    expect(component.allEpisodes.length).toBe(1);
  });

  it('should go to detail', () => {
    spyOn<any>(component['router'], 'navigate');
    component.goToDetail(1);
    expect(component['router'].navigate).toHaveBeenCalledWith(['/episodes/episode/1']);
  });
});
