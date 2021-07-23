import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private appService: AppService;
  private body: HTMLBodyElement;
  public theme: string;

  constructor(private el: ElementRef, private renderer: Renderer2, appService: AppService){
    this.appService = appService;
    this.theme = appService.theme;
    this.body = this.el.nativeElement.closest('body');

    this.renderer.removeAttribute(this.body, 'class');
    this.renderer.addClass(this.body, appService.getThemeFromLocalStorage());
  }

  ngOnInit(){ }

  changeTheme(): void {
    this.appService.changeTheme(this.body);
    this.theme = this.appService.theme;
  }

}
