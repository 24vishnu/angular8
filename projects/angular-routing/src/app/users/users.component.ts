import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [
    {id: 1, name: 'vishnu'},
    {id: 2, name: 'Leo'},
    {id: 3, name: 'Kalim'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
