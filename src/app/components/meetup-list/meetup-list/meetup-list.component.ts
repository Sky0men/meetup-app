import { Component, Input } from '@angular/core';
import { Meetup } from '../../../models/meetup';
import { MeetupService } from '../../../services/meetup/meetup.service';
import { MeetupCardComponent } from "../../meetup-card/meetup-card/meetup-card.component";
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { SearchComponent } from '../../search/search.component';
import { LoadingService } from '../../../services/loading/loading.service';
import { FilterPipe } from "../../../pipes/filter.pipe";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-meetup-list',
    standalone: true,
    templateUrl: './meetup-list.component.html',
    styleUrl: './meetup-list.component.css',
    imports: [MeetupCardComponent, NgFor, RouterLink, RouterOutlet, SpinnerComponent, SearchComponent, FilterPipe, FormsModule]
})
export class MeetupListComponent {
  meetups: Meetup[] = [];
  @Input() SearchQuery = '';

  constructor(public MeetUpService: MeetupService, public loaderService: LoadingService) {}

  getMeetUps() {
    this.MeetUpService.getAllMeetUps()
    .subscribe(meetups => this.meetups = meetups)
  }
  
  ngOnInit() {
    setTimeout(() => {
      this.loaderService.loadingOn();
    }, 0);
    
    this.MeetUpService.refreshMeetup
    .subscribe(() => {
      this.getMeetUps();
    })
    this.getMeetUps();
  }

  ngOnDestroy() {
    this.MeetUpService.unsubscribe()
  }
}
