import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseLocalUrl = "http://localhost:9090/";
  private baseServerUrl = "http://183.81.33.95/api/";

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.baseLocalUrl + "auth/login", body);
  }

  register(name: string, email: string, password: string) {
    const body = {
      name: name,
      email: email,
      password: password
    };
    return this.http.post(this.baseLocalUrl + "auth/register", body);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
