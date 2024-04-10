import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from '../../services/admin/admin.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserList } from '../../models/user-list';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateUserComponent {
  id: number = 0;
  @Input() userItem: UserList | undefined

  // public subscription: Subscription;

  constructor(public adminService: AdminService, public router: Router, public activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(params=>this.id=params["id"]);
  }

  updateUser: FormGroup = new FormGroup({
    "id": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required,),
    "fio": new FormControl("", Validators.required,),
  })

 
}
