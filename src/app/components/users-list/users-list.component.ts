import { Component } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { UserList } from '../../models/user-list';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { UserCardComponent } from "../user-card/user-card.component";
import { SpinnerComponent } from "../spinner/spinner.component";
import { UserRole } from '../../models/user-role';
import { AsyncPipe } from '@angular/common';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.css',
    imports: [NgFor, RouterOutlet, UserCardComponent, SpinnerComponent, NgIf, AsyncPipe]
})
export class UsersListComponent  {
  userRoles: UserRole[] = [];
  id: number = 0;
  constructor(public adminService: AdminService, public loaderService: LoadingService) {
  
  }
  users: UserList[] = [];

  getAllUsers() {
    this.adminService.getAllUsers().subscribe((users) => this.users = users
    )
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaderService.loadingOn();
    }, 0);
    
    this.adminService.refreshMeetup
    .subscribe(() => {
      this.getAllUsers()
      this.getUserRole()
    })
    this.getAllUsers()
    this.getUserRole()
  }

  public getUserRole() {
    this.adminService.getRole().subscribe(roles => this.userRoles = roles)
  }

}
