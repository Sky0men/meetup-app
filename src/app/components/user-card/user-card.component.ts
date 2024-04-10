import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
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
    imports: [NgFor, FormsModule, ChooseStatusComponent, RouterLink, RouterOutlet, FormsModule,],
    changeDetection: ChangeDetectionStrategy.OnPush
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

  constructor(public adminService: AdminService, public auth: AuthService, private cdr: ChangeDetectorRef) {}

  getCurrentUserRole() {
    return this.userItem.roles[0].name;
  }

  updateRole(curRole: string) {
    this.adminService.updateRole(curRole, this.userItem.id).subscribe();
    this.cdr.markForCheck()
  }

  ngOnInit() {
    this.userData = {
      'email': this.userItem.email,
      'password': this.userItem.password,
      'fio': this.userItem.fio 
    };
    console.log(
      `МЫЛО: ${this.userItem.email}, НУЛЕВАЯ РОЛЬ: ${this.userItem.roles[0].name}`
    );
  }

  deleteUser() {
    this.adminService.deleteUser(this.userItem?.id).subscribe()
    this.cdr.markForCheck()
  }

  updateUser() {
    this.adminService.updateUser(this.userItem.id, this.userData.email, this.userData.password, this.userData.fio).subscribe()
    this.cdr.markForCheck()
  }
}


