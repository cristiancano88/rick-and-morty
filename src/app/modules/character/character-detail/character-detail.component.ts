import { Character } from './../../../shared/models/character';
import { CharacterService } from './../service/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character: Character | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    if (+this.activatedRoute.snapshot.params.id) {
      this.characterService.getCharacterById(this.activatedRoute.snapshot.params.id).subscribe((character: Character) => {
        this.character = character;
      });
    } else {
      this.router.navigate(['/characters']);
    }
  }

}
