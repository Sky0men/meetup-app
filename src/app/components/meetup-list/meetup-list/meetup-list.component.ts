import { Component } from '@angular/core';
import { Meetup } from '../../../models/meetup';
import { MeetupService } from '../../../services/meetup/meetup.service';
import { MeetupCardComponent } from "../../meetup-card/meetup-card/meetup-card.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-meetup-list',
    standalone: true,
    templateUrl: './meetup-list.component.html',
    styleUrl: './meetup-list.component.css',
    imports: [MeetupCardComponent, NgFor]
})
export class MeetupListComponent {
  meetups: Array<Meetup> = [
    {
      id: 0,
      name: 'Тестовый митап',
      description: 'Описание тестового митапа'
    }
  ];

  constructor(public MeetUpService: MeetupService) {}
;

  addMeetUp(entity: Meetup) {
    this.MeetUpService.addMeetup(entity);
  }

  deleteMeetUp(card: Meetup) {
    this.MeetUpService.deleteMeetup(card);
  }

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      this.MeetUpService.addMeetup({
        id: i,
        name: `name ${i}`,
        description: `description ${i}`
      });
    }
    this.meetups = this.MeetUpService.getAll();
  }
}
