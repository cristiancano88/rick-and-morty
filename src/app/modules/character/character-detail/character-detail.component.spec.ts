import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterServiceMock } from 'src/test/mocks/services/character.service.mock';
import { CharacterService } from '../service/character.service';
import { CharacterDetailComponent } from './character-detail.component';


describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: CharacterService, useFactory: CharacterServiceMock }        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a character by id', async () => {    
    component['activatedRoute'].snapshot.params.id = 10;
    component.ngOnInit();

    expect(component.character?.name).toBe('Regular Tyrion Lannister');
  });

  it('should go to characters secction, if id is zero', () => {
    spyOn<any>(component['router'], 'navigate');
    
    component['activatedRoute'].snapshot.params.id = 0;
    component.ngOnInit();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/characters']);
  });
});
