import { Component, OnInit } from '@angular/core';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public theme: string;
  private appService: AppService;
  private body: HTMLBodyElement = document.querySelector('body');

  constructor(appService: AppService){
    this.appService = appService;
    this.theme = appService.theme;
    this.body.classList.replace(this.body.className, appService.getThemeFromLocalStorage());
  }

  ngOnInit(){ }

  changeTheme(): void {
    this.appService.changeTheme();
    this.theme = this.appService.theme;
  }

}
