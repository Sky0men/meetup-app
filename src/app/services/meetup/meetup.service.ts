import { Injectable, inject } from '@angular/core';
import { Meetup } from '../../models/meetup';
import { BehaviorSubject, Observable, Subject, delay, takeUntil, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';
import { MeetupReq } from '../../models/meetupreq';
import { Id } from '../../models/idUser&MeetUp';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  private HttpClient = inject(HttpClient);
  private apiUrl = enviroment.backendOrigin;
  private _refreshMeetup = new Subject<void>();
  private unsubscribe$ = new Subject<void>();
  meetups$ = new BehaviorSubject<Meetup[]>([])
  MeetUpItem: Meetup | undefined;
  
  constructor(public loaderService: LoadingService) { }

  unsubscribe() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  get refreshMeetup() {
    return this._refreshMeetup;
  }

  getAllMeetUps(): Observable<Meetup[]> {
    return this.HttpClient.get<Meetup[]>(`${this.apiUrl}meetup`)
    .pipe(
      delay(2000),
      tap((meetups) => {
        this.meetups$.next(meetups)
        this.loaderService.loadingOff();
      }),
      takeUntil(this.unsubscribe$)
    )
  }



  createMeetup(meetUpData: MeetupReq): Observable<MeetupReq> {
    return this.HttpClient
    .post<MeetupReq>(`${this.apiUrl}meetup`, meetUpData)
    .pipe(
      tap(() => {
        this._refreshMeetup.next();
      })
    )
  }

  deleteMeetUp(id: number | undefined) {
    return this.HttpClient
    .delete(`${this.apiUrl}meetup/${id}`)
    .pipe(
      tap(() => {
        this._refreshMeetup.next();
      })
    )
  }

  updateMeetUp(id: number | undefined, body: MeetupReq | undefined): Observable<MeetupReq> {
    return this.HttpClient
    .put<MeetupReq>(`${this.apiUrl}meetup/${id}`, body)
    .pipe(
      tap(() => {
        this._refreshMeetup.next();
      })
    )
  }

  subscribeUser(idMeetup: number, idUser: number): Observable<Meetup> {
    return this.HttpClient
    .put<Meetup>(`${this.apiUrl}meetup`, {idMeetup, idUser})
    .pipe(
      tap(() => {
        this._refreshMeetup.next();
      })
    )
  }

  unSubscribeUser(idMeetup: number, idUser: number): Observable<Meetup> {
    return this.HttpClient
    .delete<Meetup>(`${this.apiUrl}meetup`, {
      body: {
        idMeetup: idMeetup,
        idUser: idUser,
    }})
    .pipe(
      tap(() => {
        this._refreshMeetup.next();
      })
    )
  }

  isOwner() {
    if (this.MeetUpItem?.createdBy === this.MeetUpItem?.id) {
      return true
    }
      return false
  }

  // public addMeetup(entity: Meetup) {
  //   entity.id = this.meetups.length ? Math.max(...this.meetups.map(value => { return value.id })) + 1 : 1;
  //   this.meetups.push(entity);
  // }

  // public deleteMeetup(row: Meetup) {
  //   this.meetups.splice(this.meetups.indexOf(row), 1)
  // }

  // public getAll() {
  //   return this.meetups
  // }

}
