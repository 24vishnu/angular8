import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService {
    accounts = [{
        name: 'Master Account',
        status: 'active'
      },
      {
        name: 'Test-Account',
        status: 'inactive'
      },
      {
        name: 'Hidden Account',
        status: 'active'
      }
    ];

    statusUpdate = new EventEmitter<string>();

    constructor(private logService: LoggingService) {}
    addAccount(name: string, status: string) {
        // tslint:disable-next-line:object-literal-shorthand
        this.accounts.push({name: name, status: status});
        this.logService.logStausChange(status);
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.logService.logStausChange(newStatus);
    }
}
