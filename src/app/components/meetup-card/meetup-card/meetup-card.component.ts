import { Component, Input } from '@angular/core';
import { Meetup } from '../../../models/meetup';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-meetup-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './meetup-card.component.html',
  styleUrl: './meetup-card.component.css'
})
export class MeetupCardComponent {
  @Input() MeetUpItem: Meetup | undefined;
}


