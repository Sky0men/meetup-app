import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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

