import { Injectable, inject } from '@angular/core';
import { Meetup } from '../../models/meetup';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';
import { MeetupReq } from '../../models/meetupreq';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  private HttpClient = inject(HttpClient);
  private apiUrl = enviroment.backendOrigin;
  private meetupsSubject: Subject<Meetup> = new Subject<Meetup>();

  constructor() { }

  getAllMeetUps(): Observable<Meetup[]> {
    return this.HttpClient.get<Meetup[]>(`${this.apiUrl}meetup`)
  }



  createMeetup(meetUpData: MeetupReq): Observable<MeetupReq> {
    return this.HttpClient.post<MeetupReq>(`${this.apiUrl}meetup`, meetUpData)
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
