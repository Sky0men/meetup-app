import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Meetup } from '../models/meetup';
import { MeetupCardComponent } from '../components/meetup-card/meetup-card/meetup-card.component';
import { UserCardComponent } from '../components/user-card/user-card.component';
import { MeetupService } from '../services/meetup/meetup.service';

export const updateGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const meetUpService: MeetupService = inject(MeetupService)
  const router: Router = inject(Router);
  console.log(meetUpService.isOwner())
  
  if (meetUpService.isOwner()) {
    return true;
  } 
  alert('вы не создавали этот митап');
  router.navigate(['auth']);
  return false; 
};
