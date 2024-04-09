import { Component, Input } from '@angular/core';
import { Meetup } from '../../../models/meetup';
import { DatePipe, NgFor } from '@angular/common';
import { MeetupService } from '../../../services/meetup/meetup.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { Id } from '../../../models/idUser&MeetUp';
import { FilterPipe } from "../../../pipes/filter.pipe";

@Component({
    selector: 'app-meetup-card',
    standalone: true,
    templateUrl: './meetup-card.component.html',
    styleUrl: './meetup-card.component.css',
    imports: [DatePipe, RouterLink, NgFor, FilterPipe]
})
export class MeetupCardComponent {
  @Input() MeetUpItem: Meetup | undefined;
  
  constructor(public meetup: MeetupService, public auth: AuthService) {}

  deleteMeetup() {
    this.meetup.deleteMeetUp(this.MeetUpItem?.id).subscribe()
  }

  subscrUser() {
    this.meetup.subscribeUser(this.MeetUpItem?.id!, this.auth.user?.id!).subscribe()
    alert('вы подписаны!')
  }

  unSubscrUser() {
    this.meetup.unSubscribeUser(this.MeetUpItem?.id!, this.auth.user?.id!).subscribe()
  }

  isOwner() {
    if (this.auth.user?.id == this.MeetUpItem?.createdBy) {
      return true
    }
    return false
  }
}


