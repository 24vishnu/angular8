import { Component } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  // providers: [ LoggingService ]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor( private accountService: AccountsService) {
    accountService.statusUpdate.subscribe(
      status => alert('New Status: ' + status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // this.service.logStausChange(accountStatus);
    // console.log('A server status changed, new status: ', accountStatus);
  }
}
