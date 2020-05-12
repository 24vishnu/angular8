import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './notes/user1/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'angular-routing';
  canActivate = false;
  private subjectSubs: Subscription;
  constructor(private uesrService: UserService) {}

  ngOnInit() {
    this.subjectSubs = this.uesrService.activatedEvent.subscribe(
      isActivated => this.canActivate = isActivated
    );
  }

  ngOnDestroy() {
    this.subjectSubs.unsubscribe();
  }
}
