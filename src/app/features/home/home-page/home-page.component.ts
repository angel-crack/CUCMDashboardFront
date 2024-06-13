import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { MainComponent } from '../main/main.component';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, SideBarComponent, MainComponent, RouterOutlet, TestComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
