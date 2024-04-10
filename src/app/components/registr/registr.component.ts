import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registr',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ReactiveFormsModule],
  templateUrl: './registr.component.html',
  styleUrl: './registr.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrComponent {

  registrForm: FormGroup = new FormGroup({
    "cr_userEmail": new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    "cr_userPass": new FormControl("", [
      Validators.required
    ]),
    "cr_userName": new FormControl("", [
      Validators.required
    ])
  })

  private router: Router = inject(Router);

  constructor(public auth: AuthService, private cdr: ChangeDetectorRef) {}

  public tryRegister() {
    this.auth.register(
      this.registrForm.controls['cr_userEmail'].value, 
      this.registrForm.controls['cr_userPass'].value, 
      this.registrForm.controls['cr_userName'].value
      )
      .subscribe((user) => {
      if (user) {
        this.router.navigate([''])
        this.cdr.markForCheck()
      }
    })
  }
}
