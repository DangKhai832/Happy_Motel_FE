import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  userMenuVisible = false;

  constructor(private authService: AuthService) {}

  toggleSidebar() {
    // Logic để ẩn/hiện sidebar
  }

  toggleUserMenu() {
    this.userMenuVisible = !this.userMenuVisible;
  }

  // logout() {
  //   this.authService.logout();
  // }
}
