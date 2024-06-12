import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { ThemeModel } from './core/models/themes.models';
import { Themes } from './config/themes/themes';
import { ThemeUserModel } from './core/models/themes-user.models';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  
  cssProperties:ThemeUserModel

  constructor(){
    this.cssProperties = Themes;
  }

  ngAfterViewInit() {
    this.setCSSVariables(this.cssProperties['default']);
  }

  setCSSVariables(properties: ThemeModel[]) {
    properties.forEach(property => {
      const element = document.querySelector(property.scope) as HTMLElement;
      if (element) {
        element.style.setProperty(property.variableName, property.value);
      }
    });
  }
}
