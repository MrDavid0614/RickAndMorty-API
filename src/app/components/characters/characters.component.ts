import { DOCUMENT } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener, Inject } from '@angular/core';
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
  page: number = 1;
  showButton: boolean = false;
  private scrollHeight = 500;

  constructor(@Inject(DOCUMENT) private document: Document,
    private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters(this.page);
  }

  @HostListener('window:scroll')
  private onWindowScroll(): void {
    const yOffset = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;

    this.showButton = (yOffset || scrollTop) > this.scrollHeight;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  private getCharacters(page: number = 1, filter?: any): void {
    this.querySubscription = this.characterService.getCharacters(page, filter).subscribe((characters: any)=>{
      this.characters = characters;
    })

  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
  
}
