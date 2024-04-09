import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { UserList } from '../../models/user-list';
import { AdminService } from '../../services/admin/admin.service';
import { UserRole } from '../../models/user-role';
import { NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ChooseStatusComponent } from "../choose-status/choose-status.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserData } from '../../models/userData';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-user-card',
    standalone: true,
    providers: [],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.css',
    imports: [NgFor, FormsModule, ChooseStatusComponent, RouterLink, RouterOutlet, FormsModule,]
})
export class UserCardComponent  {
getUserRole() {
throw new Error('Method not implemented.');
}

  @Input() userItem: UserList = {
    'email': '',
    'fio': '',
    'id': 0,
    'password': '',
    'roles': [{
      'id': 0,
      'name': ''
    }]
  }
  userData: UserData = {
    'email': this.userItem.email,
    'password': this.userItem.password,
    'fio': this.userItem.fio 
  }
  @Input() role: UserRole[] = [];
  @Output() changeStatus = new EventEmitter();

  constructor(public adminService: AdminService, public auth: AuthService) {}

  updateRole() {
    this.adminService.updateRole(this.userItem.roles[0].name, this.userItem.id).subscribe()
  }

  ngOnInit() {
    this.userData = {
      'email': this.userItem.email,
      'password': this.userItem.password,
      'fio': this.userItem.fio 
    }
  }

  deleteUser() {
    this.adminService.deleteUser(this.userItem?.id).subscribe()
  }

  updateUser() {
    this.adminService.updateUser(this.userItem.id, this.userData.email, this.userData.password, this.userData.fio).subscribe()
  }
}


