import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
// tslint:disable:no-string-literal
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string };
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // following route snapshot params is and property
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // following route params is an observable
    /*
    Basically Observable are a feature added by some other third-party package by Angular,
    which allow you to easily work with asynchronous tasks
    */
    this.paramsSubscription = this.route.params.subscribe( result => {
      this.user.id = result['id'];
      this.user.name = result['name'];
     });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
