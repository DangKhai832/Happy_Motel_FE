import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService, ToastNoAnimation } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router
  ,private toastr: ToastrService) {}

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
    this.authService.login(this.username, this.password)
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.result.token);
          this.router.navigate(['/home']);
        },
        (error: any) => {
          this.toastr.error("lỗi tùm lum ")
        }
      );
  }
}
