import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, RouterLink, ReactiveFormsModule],
  providers: [HttpClientModule, AuthService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  
  loginForm: FormGroup = new FormGroup({
    "userEmail": new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    "userPass": new FormControl("", [
      Validators.required
    ])
  })

  private router: Router = inject(Router);

  constructor(public auth: AuthService, private cdr: ChangeDetectorRef ) {}

  public tryLogin() {
    this.auth.login(this.loginForm.controls['userEmail'].value, this.loginForm.controls['userPass'].value).subscribe((user) => {
      if (user) {
        this.router.navigate([''])
        this.cdr.markForCheck()
      }
    })
  }
}
