import { Component, inject } from '@angular/core';
import { MeetupService } from '../../services/meetup/meetup.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MeetupReq } from '../../models/meetupreq';

@Component({
  selector: 'app-create-meetup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './create-meetup.component.html',
  styleUrl: './create-meetup.component.css'
})
export class CreateMeetupComponent {
  meetups: MeetupReq | undefined;
  
  constructor(public meetupService: MeetupService) { }

  createForm: FormGroup = new FormGroup({
    "name": new FormControl(""),
    "description": new FormControl(""),
    "time": new FormControl(Date.now()),
    "location": new FormControl(""),
    "target_audience": new FormControl(""),
    "need_to_know": new FormControl(""),
    "will_happen": new FormControl(""),
    "reason_to_come": new FormControl(""),
    "duration": new FormControl(1)
  })

  createMeetUp() {
    this.meetupService.createMeetup(this.createForm.value).subscribe(meetup => this.meetups = meetup)
    console.log(this.createForm.value)
  }
}
