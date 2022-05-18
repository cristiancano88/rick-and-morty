import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';

@NgModule({
  declarations: [
    AllCharactersComponent,
    CharacterDetailComponent,
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
