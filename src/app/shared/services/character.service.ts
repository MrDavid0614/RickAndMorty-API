import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { GET_CHARACTERS } from '../constants/query';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  loading: boolean;
  error: any;
  characters: Observable<Character[]>;

  constructor(private apollo: Apollo) { }
  
  getCharacters(page?: number, filter?) {

    return this.characters = this.apollo.watchQuery({
      query: GET_CHARACTERS,
      variables: { page, filter}
    })
    .valueChanges
    .pipe(
      map(({ data }: any)=>{
        const characters: Character[] = data.characters.results.map((character: any) => {
          const { name, image, status, species, location:locationObject, episode:episodes } = character;
          const location: string = locationObject.name;
          const firstEpisode: string = episodes[0].name;
          return { name, image, status, species, location, firstEpisode };
        });

        return characters;
      })
    );
  }
}
