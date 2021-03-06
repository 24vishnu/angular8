import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './assignment/game-control/game-control.component';
import { OddComponent } from './assignment/odd/odd.component';
import { EvenComponent } from './assignment/even/even.component';
import { BasicHighlightDirecitive } from '../basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './my-directive/better-highlight.directive';
import { UnlessDirective } from './my-directive/unless.directive';
import { AccountComponent } from './understand_service/account/account.component';
import { NewAccountComponent } from './understand_service/new-account/new-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { ActiveUsersComponent } from './Assignment1/active-users/active-users.component';
import { InactiveUsersComponent } from './Assignment1/inactive-users/inactive-users.component';
import { CounterService } from './Assignment1/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,

    BasicHighlightDirecitive,

    BetterHighlightDirective,

    UnlessDirective,

    AccountComponent,

    NewAccountComponent,

    ActiveUsersComponent,

    InactiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ AccountsService, LoggingService, CounterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
