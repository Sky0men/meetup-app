import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { MeetupService } from '../../services/meetup/meetup.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Meetup } from '../../models/meetup';
import { MeetupCardComponent } from "../meetup-card/meetup-card/meetup-card.component";

@Component({
    selector: 'app-my-meetups',
    standalone: true,
    templateUrl: './my-meetups.component.html',
    styleUrl: './my-meetups.component.css',
    imports: [RouterOutlet, MeetupCardComponent]
})
export class MyMeetupsComponent {
  id: number = 0;
  public subscription: Subscription;
  meetups: Meetup[] = [];
  
  constructor(public meetupService: MeetupService, public auth: AuthService,  public router: Router, public activateRoute: ActivatedRoute) { 
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']) }

    getMeetUps() {
      this.meetupService.getAllMeetUps()
      .subscribe(meetups => this.meetups = meetups)
    }

    ngOnInit() {
        return this.getMeetUps()
    }
  
}
