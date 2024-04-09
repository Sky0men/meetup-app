import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin/admin.service';
import { UserRole } from '../../models/user-role';
import { AuthService } from '../../services/auth/auth.service';
import { UserList } from '../../models/user-list';

@Component({
  selector: 'app-choose-status',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './choose-status.component.html',
  styleUrl: './choose-status.component.css'
})
export class ChooseStatusComponent {
  @Output() choosenStatus = new EventEmitter();
  @Output() roleName = new EventEmitter();
  @Input() roleItem: UserRole[] = [];
  @Input() UserItem = 0;
  id: string = '';

  constructor(public admin: AdminService, public auth: AuthService) { }

  returnRole() {
    this.choosenStatus.emit(this.roleItem[0].name)
  }
}
