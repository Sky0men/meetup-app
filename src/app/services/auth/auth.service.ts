import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private HttpClient = inject(HttpClient);
  private apiUrl = enviroment.backendOrigin;
  private body = { email: '', password: '', fio: '' };

  constructor() { }

  public get user(): User | null {
    const token = localStorage.getItem('token');
    if (token) {
      const user: User = this.parseJwt(token);
      return user
    }
    return null
  }

  public isAdmin(): boolean {
    if (this.user?.roles[0].id == 1) {
      return true
    } 
    return false
  } 

  public login(email: string, password: string): Observable<Object> {
    return this.HttpClient.post<{token: string}>(`${this.apiUrl}auth/login`, JSON.stringify({email, password}))
    .pipe(
      map((response) => {
        localStorage.setItem('token', response.token);
        return true;
      })
    )
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public register(email: string, password: string, name: string): Observable<Object> {
    this.body.email = email;
    this.body.password = password;
    this.body.fio = name;
return this.HttpClient.post<{token: string}>(`${this.apiUrl}auth/registration`, JSON.stringify(this.body))
.pipe(
  map(response => {
    localStorage.setItem('token', response.token);
    console.log(response)
    return true
  })
)
}

private parseJwt(token: string): User {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  console.log(JSON.parse(jsonPayload))
  return JSON.parse(jsonPayload);
}
}
