import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserList } from '../../models/user-list';
import { AdminService } from '../../services/admin/admin.service';
import { UserRole } from '../../models/user-role';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChooseStatusComponent } from "../choose-status/choose-status.component";

@Component({
    selector: 'app-user-card',
    standalone: true,
    providers: [],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.css',
    imports: [NgFor, FormsModule, ChooseStatusComponent]
})
export class UserCardComponent  {
getUserRole() {
throw new Error('Method not implemented.');
}
  @Input() userItem: UserList | undefined
  @Input() role: UserRole[] = [];
  @Output() changeStatus = new EventEmitter();

  constructor(public adminService: AdminService) { }

}


