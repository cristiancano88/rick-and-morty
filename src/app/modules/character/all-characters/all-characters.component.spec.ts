import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterServiceMock } from 'src/test/mocks/services/character.service.mock';
import { CharacterService } from '../service/character.service';
import { AllCharactersComponent } from './all-characters.component';


describe('AllCharactersComponent', () => {
  let component: AllCharactersComponent;
  let fixture: ComponentFixture<AllCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllCharactersComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: CharacterService, useFactory: CharacterServiceMock }        
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all characters', () => {
    component.ngOnInit();
    expect(component.allCharacters.length).toBe(1);
  });

  it('should go to detail', () => {
    spyOn<any>(component['router'], 'navigate');
    component.goToDetail(1);
    expect(component['router'].navigate).toHaveBeenCalledWith(['/characters/character/1']);
  });
});
