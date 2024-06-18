import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const registerButton = document.getElementById('register');
    const loginButton = document.getElementById('login');
    const container = document.getElementById('container');

    registerButton?.addEventListener('click', () => {
      container?.classList.add('right-panel-active');
    });

    loginButton?.addEventListener('click', () => {
      container?.classList.remove('right-panel-active');
    });
  }
  login() {
    // Implement actual login logic here, this is just a placeholder
    const fakeToken = 'fake-jwt-token';
    this.authService.login(fakeToken);
    this.router.navigate(['/home']);
  }
}
