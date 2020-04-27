import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // change None to Emulated
})
export class ServerElementComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('servElement')
    element: {
      type: string,
      name: string,
      content: string
    };
  constructor() { }

  ngOnInit() {
  }

}
