import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Meetup } from '../../../models/meetup';
import { AsyncPipe, DatePipe, NgClass, NgFor, NgStyle } from '@angular/common';
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
    imports: [DatePipe, RouterLink, NgFor, FilterPipe, NgStyle, NgClass, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetupCardComponent {
  @Input() MeetUpItem: Meetup | undefined;
  
  constructor(public meetup: MeetupService, public auth: AuthService, private cdr: ChangeDetectorRef) {}

  deleteMeetup() {
    this.meetup.deleteMeetUp(this.MeetUpItem?.id).subscribe()
    this.cdr.markForCheck();
  }

  subscrUser() {
    this.meetup.subscribeUser(this.MeetUpItem?.id!, this.auth.user?.id!).subscribe()
    alert('вы подписаны!')
    this.cdr.markForCheck();
  }

  unSubscrUser() {
    this.meetup.unSubscribeUser(this.MeetUpItem?.id!, this.auth.user?.id!).subscribe()
    this.cdr.markForCheck()
  }

  isOwner() {
    if (this.auth.user?.id == this.MeetUpItem?.createdBy) {
      return true
    }
    return false
  }

  createBy() {
    return this.MeetUpItem?.createdBy
  }
}


