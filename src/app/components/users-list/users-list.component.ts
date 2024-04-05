import { Component } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { UserList } from '../../models/user-list';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "../user-card/user-card.component";
import { SpinnerComponent } from "../spinner/spinner.component";
import { UserRole } from '../../models/user-role';

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.css',
    imports: [NgFor, RouterOutlet, UserCardComponent, SpinnerComponent, NgIf]
})
export class UsersListComponent  {
  userRoles: UserRole[] = [];
  constructor(public adminService: AdminService) { }
  bool = true;
  users: UserList[] = [];

  getAllUsers() {
    this.adminService.getAllUsers().subscribe((users) => this.users = users
    )
  }

  ngOnInit(): void {
    this.getAllUsers()
    this.bool = false;
    this.getUserRole()
  }

  public getUserRole() {
    this.adminService.getRole().subscribe(roles => this.userRoles = roles)
  }
}
