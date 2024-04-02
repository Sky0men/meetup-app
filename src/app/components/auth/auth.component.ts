import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, RouterLink, FormsModule],
  providers: [HttpClientModule, AuthService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  login: string = '';
  pass:string = '';

  private router: Router = inject(Router);

  constructor(public auth: AuthService ) {}

  public tryLogin() {
    this.auth.login(this.login, this.pass).subscribe((user) => {
      if (user) {
        this.router.navigate([''])
      }
    })
  }
}
