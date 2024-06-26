import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isHovered = false;

  constructor() {}

  toggleHover(hovered: boolean) {
    this.isHovered = hovered;
  }
}
