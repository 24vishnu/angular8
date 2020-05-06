import { Component, Input } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  // providers: [ LoggingService ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor( private accountService: AccountsService) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id, status);
    // this.service.logStausChange(status);
    this.accountService.statusUpdate.emit(status);
  }
}
