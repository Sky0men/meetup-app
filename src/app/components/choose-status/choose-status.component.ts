import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin/admin.service';
import { UserRole } from '../../models/user-role';

@Component({
  selector: 'app-choose-status',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './choose-status.component.html',
  styleUrl: './choose-status.component.css'
})
export class ChooseStatusComponent {
  @Output() choosenStatus = new EventEmitter();
  @Input() roleItem: UserRole[] = [];
  id: number = 0;

  constructor(public admin: AdminService) { }

}
