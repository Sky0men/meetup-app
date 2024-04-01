import { Injectable } from '@angular/core';
import { Meetup } from '../../models/meetup';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  private meetups: Array<Meetup> = [];

  constructor() { }

  public addMeetup(entity: Meetup) {
    entity.id = this.meetups.length ? Math.max(...this.meetups.map(value => { return value.id })) + 1 : 1;
    this.meetups.push(entity);
  }

  public deleteMeetup(row: Meetup) {
    this.meetups.splice(this.meetups.indexOf(row), 1)
  }

  public getAll() {
    return this.meetups
  }

}
