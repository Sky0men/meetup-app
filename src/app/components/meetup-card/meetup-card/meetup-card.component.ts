import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meetup } from '../../../models/meetup';


@Component({
  selector: 'app-meetup-card',
  standalone: true,
  imports: [],
  templateUrl: './meetup-card.component.html',
  styleUrl: './meetup-card.component.css'
})
export class MeetupCardComponent {
  @Input() MeetUpItem = new Meetup();
  @Output() deleteMeetUp = new EventEmitter();

  deleteItem() {
    this.deleteMeetUp.next(this.MeetUpItem);
  }
}


