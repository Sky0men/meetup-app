import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { Meetup } from '../../models/meetup';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() userItem: User | undefined;
  @Input() MeetUpItem: Meetup | undefined;
  constructor(public authService: AuthService) {}

  public removeToken() {
     this.authService.logout()
   }

  public userIsAdmin(): number | undefined {
    if (this.authService.isAdmin() == true) {
      return this.authService.user?.id
    } 
      return undefined
  } 
}

