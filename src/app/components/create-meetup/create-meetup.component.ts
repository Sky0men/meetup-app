import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { MeetupService } from '../../services/meetup/meetup.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { MeetupReq } from '../../models/meetupreq';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-meetup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, DatePipe],
  templateUrl: './create-meetup.component.html',
  styleUrl: './create-meetup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateMeetupComponent {
  meetups: MeetupReq | undefined;
  date: Date = new Date();
  
  constructor(public meetupService: MeetupService, public router: Router, private cdr: ChangeDetectorRef) { }

  createForm: FormGroup = new FormGroup({
    "name": new FormControl("", Validators.required),
    "description": new FormControl("", Validators.required),
    "time": new FormControl(this.convertDate(), [
      Validators.required,
    
    ]),
    "location": new FormControl("", Validators.required),
    "target_audience": new FormControl("", Validators.required),
    "need_to_know": new FormControl("", Validators.required),
    "will_happen": new FormControl("", Validators.required),
    "reason_to_come": new FormControl("", Validators.required),
    "duration": new FormControl(1, Validators.required)
  })

  convertDate() {
    this.date.getTime()
  }

  createMeetUp() {
    this.meetupService.createMeetup(this.createForm.value).subscribe(meetup => this.meetups = meetup)
    console.log(this.createForm.value)
    this.router.navigate([''])
    this.cdr.markForCheck()
  }

}
