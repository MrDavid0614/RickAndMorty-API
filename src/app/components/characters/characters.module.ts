import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterModule } from './character/character.module';

import { CharactersComponent } from './characters.component';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    CharacterModule
  ]
})
export class CharactersModule { }
