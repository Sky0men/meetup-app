import { ChangeDetectionStrategy, Component, NgModule, Output } from '@angular/core';
import { MeetupService } from '../../services/meetup/meetup.service';
import { MeetupReq } from '../../models/meetupreq';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Meetup } from '../../models/meetup';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../../pipes/filter.pipe";
import { MeetupCardComponent } from "../meetup-card/meetup-card/meetup-card.component";

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [NgFor, NgIf, RouterLink, FormsModule, FilterPipe, MeetupCardComponent, DatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Output() searchQuery: string = ''
  searchRes: Meetup[] = [];
  meetups: Meetup[] = [];

  constructor(public meetupService: MeetupService) { }

  searchMeetUp() {
    if (this.searchQuery.trim() !== '') {
      this.meetupService.getAllMeetUps().subscribe(
        (meetup) => {
          this.searchRes = meetup.filter(meetup => {return meetup.name})
          this.searchRes = meetup.filter(meetup => {return meetup.description})
          this.searchRes = meetup.filter(meetup => {return meetup.time})
          console.log(this.searchRes)
        }
      )
    }
  }
}


