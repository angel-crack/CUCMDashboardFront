import { Component } from '@angular/core';
import { navBarData } from './nav-data';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { navBarSetting } from '../../../core/models/nav-bar-settings.models';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {


  collapsed: boolean = true;
  navData: navBarSetting[] = navBarData;
  
  toggleCollape(): void {
    console.log("Before... ", this.collapsed)
    this.collapsed = !this.collapsed
    console.log("After... ", this.collapsed)
  }
  

}
