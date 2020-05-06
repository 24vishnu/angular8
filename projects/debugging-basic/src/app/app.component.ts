import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { UserService } from './Assignment1/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ UserService ]
})
export class AppComponent implements OnInit {
  // &******************************* Assignment ************************
  ngOnInit() {}
  // ********************************************************************
  // accounts: {name: string, status: string}[];
  // constructor(private accountervice: AccountsService) {}

  // ngOnInit() {
  //   this.accounts = this.accountervice.accounts;
  // }
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  /*
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  onlyOdd = false;
  oddNumber = [1, 3, 5, 7, 9];
  evenNumber = [2, 4, 6, 8];
  value = 5;
  // -------------------------------------
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
      console.log(firedNumber);
      firedNumber % 2 === 1 ? this.oddNumbers.push(firedNumber) : this.evenNumbers.push(firedNumber);
    }
*/
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%55

  // serverElements = [{type: 'server', name: 'Test', content: 'simple Testing'}];


  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }

}
