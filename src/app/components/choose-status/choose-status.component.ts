import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, input } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin/admin.service';
import { UserRole } from '../../models/user-role';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-choose-status',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './choose-status.component.html',
  styleUrl: './choose-status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChooseStatusComponent {
  @Input() roleItem: UserRole[] = [];
  @Input() currentRole: string = '';
  @Output() roleTrigger: EventEmitter<string> = new EventEmitter<string>();

  constructor(public admin: AdminService, public auth: AuthService, private cdr: ChangeDetectorRef) {}

  onChangeRole() {
    this.roleTrigger.emit(this.currentRole);
    this.cdr.markForCheck()
  }

  // ngOnInit() {
  //   console.log(this.currentRole);
  // }
}
