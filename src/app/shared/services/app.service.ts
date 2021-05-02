import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  theme: string =  localStorage.getItem('theme') || document.querySelector('body').className;

  constructor() { 

    this.saveThemeConfigToLocalStorage();

  }

  saveThemeConfigToLocalStorage(): void {
    localStorage.setItem('theme', this.theme);
  }

  changeTheme(): void {
    const body = document.querySelector('body');

    if(body.classList.contains('light'))
      body.classList.replace('light', 'dark')
    else
      body.classList.replace('dark', 'light');

  }
}
