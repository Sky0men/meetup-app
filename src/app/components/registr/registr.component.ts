import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registr',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './registr.component.html',
  styleUrl: './registr.component.css'
})
export class RegistrComponent {
  cr_login: string = '';
  cr_pass: string = '';
  cr_name: string = '';

  private router: Router = inject(Router);

  constructor(public auth: AuthService ) {}

  public tryRegister() {
    this.auth.register(this.cr_login, this.cr_pass, this.cr_name).subscribe((user) => {
      if (user) {
        this.router.navigate([''])
      }
    })
  }
}
