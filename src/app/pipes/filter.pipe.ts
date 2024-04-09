import { Pipe, PipeTransform } from '@angular/core';
import { Meetup } from '../models/meetup';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(meetups: Meetup[], searchQuery: string): Meetup[] {
    if (!searchQuery || !meetups) {
      return meetups;
    }

    searchQuery = searchQuery.toLowerCase();
    return meetups.filter(meetup => {
      return (
        meetup.name.toLowerCase().includes(searchQuery) ||
        meetup.description.toLowerCase().includes(searchQuery) ||
        meetup.owner?.fio.toLowerCase().includes(searchQuery) ||
        new Date(meetup.time).toDateString().toLowerCase().includes(searchQuery)
      )
    })
}
}
