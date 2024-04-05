import { Component } from '@angular/core';
import { Meetup } from '../../../models/meetup';
import { MeetupService } from '../../../services/meetup/meetup.service';
import { MeetupCardComponent } from "../../meetup-card/meetup-card/meetup-card.component";
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../../spinner/spinner.component';

@Component({
    selector: 'app-meetup-list',
    standalone: true,
    templateUrl: './meetup-list.component.html',
    styleUrl: './meetup-list.component.css',
    imports: [MeetupCardComponent, NgFor, RouterLink, RouterOutlet, SpinnerComponent]
})
export class MeetupListComponent {
  meetups: Meetup[] = [];

  constructor(public MeetUpService: MeetupService) {}

  getMeetUps() {
    this.MeetUpService.getAllMeetUps().subscribe(meetups => this.meetups = meetups)
  }

  ngOnInit() {
    this.getMeetUps()
  }
}
