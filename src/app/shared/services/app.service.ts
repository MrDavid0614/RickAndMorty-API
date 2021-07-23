import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  theme: string = localStorage.getItem('theme') || document.querySelector('body').className;

  constructor() {
    this.saveThemeConfigToLocalStorage();
  }

  saveThemeConfigToLocalStorage(): void {
    localStorage.setItem('theme', this.theme);
  }

  getThemeFromLocalStorage(): string {
    return this.theme;
  }

  changeTheme(body: HTMLBodyElement): void {

    if(body.classList.contains('light')){
      this.theme = 'dark';
      body.classList.replace('light', this.theme);
    }
    else{
      this.theme = 'light';
      body.classList.replace('dark', this.theme);
    }

    this.saveThemeConfigToLocalStorage();
  }

}
