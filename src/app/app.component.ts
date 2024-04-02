import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MeetupCardComponent } from './components/meetup-card/meetup-card/meetup-card.component';
import { MeetupListComponent } from './components/meetup-list/meetup-list/meetup-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeetupCardComponent, MeetupListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meetup-app';
}
