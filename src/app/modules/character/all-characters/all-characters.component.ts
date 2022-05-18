import { Router } from '@angular/router';
import { Character } from './../../../shared/models/character';
import { CharacterService } from './../service/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss']
})
export class AllCharactersComponent implements OnInit {

  allCharacters: Character[] = [];

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((characters: Character[]) => {
      this.allCharacters = characters;
    });
  }

  goToDetail(id: number) {
    this.router.navigate([`/characters/character/${id}`]);
  }
}
