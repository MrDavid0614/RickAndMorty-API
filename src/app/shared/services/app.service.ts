import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  theme: string = localStorage.getItem('theme') 
                  ? 
                    localStorage.getItem('theme') 
                  : 
                    document.querySelector('body').className;

  constructor() {
    this.saveThemeConfigToLocalStorage();
  }

  saveThemeConfigToLocalStorage(): void {
    localStorage.setItem('theme', this.theme);
  }

  getThemeFromLocalStorage(): string {
    return this.theme;
  }

  changeTheme(): void {
    const body = document.querySelector('body');

    if(body.classList.contains('light')){
      this.theme = 'dark';
      body.classList.replace('light', 'dark');
    }
    else{
      this.theme = 'light';
      body.classList.replace('dark', 'light');
    }

    this.saveThemeConfigToLocalStorage();
  }

}
