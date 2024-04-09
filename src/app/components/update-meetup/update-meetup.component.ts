import { Component, Input, Output } from '@angular/core';
import { MeetupReq } from '../../models/meetupreq';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MeetupService } from '../../services/meetup/meetup.service';
import { Subscription } from 'rxjs';
import { Meetup } from '../../models/meetup';

@Component({
  selector: 'app-update-meetup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './update-meetup.component.html',
  styleUrl: './update-meetup.component.css'
})
export class UpdateMeetupComponent {
  meetups: MeetupReq | undefined;
  id: number = 0;
  @Output() MeetUpItem: Meetup | undefined;
  public subscription: Subscription;
  
  date: Date = new Date();
  
  constructor(public meetupService: MeetupService, public router: Router, public activateRoute: ActivatedRoute) { 
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id'])
  }

  updateForm: FormGroup = new FormGroup({
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

  updateMeetup() {
    this.meetupService.updateMeetUp(this.id, this.updateForm.value).subscribe()
    this.router.navigate([''])
  }
}
