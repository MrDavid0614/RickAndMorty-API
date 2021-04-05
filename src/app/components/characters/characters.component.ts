import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/shared/models/character';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  querySubscription: Subscription;
  characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(page: number = 1, filter?: any){

    this.querySubscription = this.characterService.getCharacters(page, filter).subscribe((characters: any)=>{
      this.characters = characters;
      console.log(characters);
    })

  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
  
}
