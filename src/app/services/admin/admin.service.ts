import { HttpClient } from '@angular/common/http';
import { Injectable, Output, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';
import { UserList } from '../../models/user-list';
import { UserRole } from '../../models/user-role';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private HttpClient = inject(HttpClient);
  private apiUrl = enviroment.backendOrigin;

  constructor() { }

  public getAllUsers(): Observable<UserList[]> {
    return this.HttpClient.get<UserList[]>(`${this.apiUrl}user`);
  }

  public getRole(): Observable<UserRole[]> {
    return this.HttpClient.get<UserRole[]>(`${this.apiUrl}role`)
  }
}
