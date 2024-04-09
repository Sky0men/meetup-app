import { HttpClient } from '@angular/common/http';
import { Injectable, Output, inject } from '@angular/core';
import { Observable, Subject, delay, tap } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';
import { UserList } from '../../models/user-list';
import { UserRole } from '../../models/user-role';
import { LoadingService } from '../loading/loading.service';
import { UserData } from '../../models/userData';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private HttpClient = inject(HttpClient);
  private apiUrl = enviroment.backendOrigin;
  private _refreshUser = new Subject<void>();

  constructor(public loaderService: LoadingService) { }

  get refreshMeetup() {
    return this._refreshUser;
  }

  public getAllUsers(): Observable<UserList[]> {
    return this.HttpClient.get<UserList[]>(`${this.apiUrl}user`)
    .pipe(
      delay(2000),
      tap(() => {
        this.loaderService.loadingOff();
      })
    );
  }

  public updateRole(name: string, userId: number) {
    return this.HttpClient.put(`${this.apiUrl}user/role`, {name, userId})
  }

  public getRole(): Observable<UserRole[]> {
    return this.HttpClient.get<UserRole[]>(`${this.apiUrl}role`)
  }

  public updateUser(id: number, email: string, password: string, fio: string) {
    return this.HttpClient
    .put(`${this.apiUrl}user/${id}`, {email, password, fio})
    .pipe(
      tap(() => {
        this._refreshUser.next();
      })
    )
  }

  public deleteUser(id: number | undefined) {
    return this.HttpClient
    .delete(`${this.apiUrl}user/${id}`).pipe(
      tap(() => {
        this._refreshUser.next();
      })
    )
  }
}
