import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss']
})
export class User1Component implements OnInit {

  id: number;
  activate = false;

  constructor(private route: ActivatedRoute, private uesrService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
      }
    );
  }

  canActiveted() {
    this.activate = !this.activate;
    // this.uesrService.activatedEvent.emit(this.activate);
    this.uesrService.activatedEvent.next(this.activate);
  }

}
