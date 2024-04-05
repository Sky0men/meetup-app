import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MeetupCardComponent } from './components/meetup-card/meetup-card/meetup-card.component';
import { MeetupListComponent } from './components/meetup-list/meetup-list/meetup-list.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MeetupCardComponent, MeetupListComponent, RouterLink, NavbarComponent, SpinnerComponent]
})
export class AppComponent {
  title = 'meetup-app';
}
